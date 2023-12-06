<?php

namespace App\Http\Controllers\API;

use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       try {
            $users = User::all();
            return $this->returnJson(true, 200, 'Users listed successfully', UserResource::collection($users));
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Users not found', 404);
       }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        try {
            $users = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'profile_photo_path' => $request->profile_photo_path ?? null,
            ]);

            return $this->returnJson(true, 201, 'User created successfully', UserResource::make($users));
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('User not found', 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        try {
            $users = User::findOrFail($id);
            return $this->returnJson(true, 200, 'User retrieved successfully', UserResource::make($users));
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('User not found', 404);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, int $id)
    {
        try {
            $user = User::findOrFail($id);

            $user->update([
                'name' => $request->name ?? $user->name,
                'email' => $request->email ?? $user->email,
                'password' => Hash::make($request->password) ?? $user->password,
                'profile_photo_path' => $request->profile_photo_path ?? $user->profile_photo_path,
            ]);

            return $this->returnJson(true, 200, 'User updated successfully', UserResource::make($user));

        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('User not found', 404);
        }
       
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function verifyEmail(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'success' => true,
                'status' => 200,
                'message' => 'User not found, the email is disponible.',
            ], 200);
        }

        return response()->json([
            'success' => false,
            'status' => 400,
            'message' => 'The email has already been taken.',            
        ], 400);
    }

    public function returnJson($success, $status, $message, $data)
    {
        return response()->json([
            'success' => $success,
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ], $status);
    }
}
