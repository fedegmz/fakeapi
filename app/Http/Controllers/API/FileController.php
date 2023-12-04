<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File as FileRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {
            //obtener el archivo en conjunto con el nombre original y el nombre generado
            $file = $request->file('file');
            $originalname = $file->getClientOriginalName();
            $filename = substr(md5($file->getClientOriginalName() . time()), 0, 4) . '.' . $file->getClientOriginalExtension();
            //guardar el archivo en la carpeta files del storage
            $file->storeAs('files', $filename, 'public');
            $location = url('api/v1/files/' . $filename);

            // guardar el registro en la base de datos
            $fileRecord = new FileRecord;
            $fileRecord->filename = $filename;
            $fileRecord->originalname = $originalname;
            $fileRecord->save();

            return [
                'message' => 'File uploaded successfully',
                'originalname' => $originalname,
                'filename' => $filename,
                'location' => $location,
            ];
        } else {
            return [
                'message' => 'No file uploaded',
            ];
        }
    }

    public function show($filename)
    {
        //obtener el archivo de la carpeta files del storage
        $path = 'files/' . $filename;

        //verificar si el archivo existe
        if (!Storage::disk('public')->exists($path)) {
            abort(404);
        }

        //obtener el archivo
        $file = Storage::disk('public')->get($path);
        //obtener el tipo de archivo
        $type = File::mimeType(public_path('storage/' . $path));

        //crea una respuesta con el archivo y el código 200
        $response = response($file, 200)->header('Content-Type', $type);

        return $response;
    }

}
