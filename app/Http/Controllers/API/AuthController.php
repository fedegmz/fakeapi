<?php

namespace App\Http\Controllers\API;

use App\Exceptions\ApiException;
use App\Exceptions\ApiJwtException;
use App\Http\Controllers\Controller;
use App\Http\Requests\JwtRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Hash;
use Nette\Utils\Random;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(JwtRequest $request)
    {
        try {
                $user = User::where('email', $request->email)->first();
                
                if (!$user || !Hash::check($request->password, $user->password)) {
                    // Manejar el caso en que las credenciales no son válidas
                    throw new ApiJwtException('Invalid credentials');
                }
        
                // Tiempo de vida del token de acceso (en segundos)
                $tiempoVidaAcceso = 3600; // 1 hora
                // Tiempo de vida del token de actualización (en segundos)
                $tiempoVidaRefresh = 604800; // 1 semana
                // Fecha de emisión y expiración del token de acceso
                $fechaEmisionAcceso = time();
                $fechaExpiracionAcceso = $fechaEmisionAcceso + $tiempoVidaAcceso;

                // Fecha de emisión y expiración del token de actualización
                $fechaEmisionRefresh = time();
                $fechaExpiracionRefresh = $fechaEmisionRefresh + $tiempoVidaRefresh;

                // Crear el token de acceso
                $accessToken = JWT::encode(
                    [
                        'iat' => $fechaEmisionAcceso,
                        'exp' => $fechaExpiracionAcceso,
                        'usuario_id' => $user->id,
                    ],
                    Env::get('JWT_SECRET_KEY'),
                    'HS256'
                );

                // Crear el token de actualización
                $refreshToken = JWT::encode(
                    [
                        'iat' => $fechaEmisionRefresh,
                        'exp' => $fechaExpiracionRefresh,
                        'usuario_id' => $user->id,
                        'random_str' => Random::generate(32),
                    ],
                    Env::get('JWT_SECRET_KEY'),
                    'HS256'
                );

                return response()->json([
                    'access_token' => $accessToken,
                    'refresh_token' => $refreshToken,
                ]);
        } catch (ApiJwtException $e) {
            return $e->render($request);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function profile()
    {
        // Obtener el token de acceso de la cabecera de la petición
        $accessToken = request()->header('Authorization');
        $tokenAccess = str_replace('Bearer ', '', $accessToken);

        try {
            $payload = JWT::decode($tokenAccess, new Key(Env::get('JWT_SECRET_KEY'),'HS256'));
            $user = User::find($payload->usuario_id);
            return response()->json($user);
        } catch (\Throwable $th) {
            throw new ApiJwtException('Invalid token');
        }

      
    }

    /**
     * Display the specified resource.
     */
    public function refreshToken(JwtRequest $request)
    {
        //refresh token 
        $refreshToken = $request->refresh_token;
        try{
            $payload = JWT::decode($refreshToken, new Key(Env::get('JWT_SECRET_KEY'),'HS256'));
            
            // Generar un nuevo token de acceso con una nueva fecha de expiración
            $nuevoAccessToken = JWT::encode(
                [
                    'iat' => time(),
                    'exp' => time() + 3600, // Nueva fecha de expiración (1 hora)
                    'usuario_id' => $payload->usuario_id,
                ],
                Env::get('JWT_SECRET_KEY'),
                'HS256'
            );

            // Generar un nuevo token de actualización con una nueva fecha de expiración
            $nuevoRefreshToken = JWT::encode(
                [
                    'iat' => time(),
                    'exp' => time() + 604800, // Nueva fecha de expiración (1 semana)
                    'usuario_id' => $payload->usuario_id,
                    'random_str' => Random::generate(32), // Nueva cadena aleatoria
                ],
                Env::get('JWT_SECRET_KEY'),
                'HS256'
            );

            // Devolver ambos tokens
            return response()->json([
                'access_token' => $nuevoAccessToken,
                'refresh_token' => $nuevoRefreshToken,
            ]);
        }catch(\Throwable $th){
            throw new ApiJwtException('Invalid token');
        }

    }

    public function returnJson($success, $status, $message, $data = null)
    {
        return response()->json([
            'success' => $success,
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

}
