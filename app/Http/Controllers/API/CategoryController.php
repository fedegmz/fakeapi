<?php

namespace App\Http\Controllers\API;

use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $category = Category::all();
            return $this->returnJson(true, 200, 'Categories listed successfully', $category);
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Categories not found', 404);
        }

        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
{
    $category = Category::create($request->all());

    return $this->returnJson(true, 201, 'Category created successfully', $category);
}


    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {

       try {
            $category = Category::findOrFail($id);
            return $this->returnJson(true, 200, 'Category retrieved successfully', $category);
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Category not found', 404);
       }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, int $id)
    {

       try{
            $category = Category::findOrFail($id);
            $category->update($request->all());
            return $this->returnJson(true, 200, 'Category updated successfully', $category);
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Category not found', 404);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            return $this->returnJson(true, 200, 'Category deleted successfully', null);
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Category not found', 404);
        }
    }

    public function findProductByCategory(int $id)
    {
        try {
           $products = Category::findOrFail($id)->products;
            return $this->returnJson(true, 200, 'Products listed successfully', $products);
        } catch (\Throwable $e) {
            // La excepción específica para cuando el modelo no se encuentra
            throw new ApiException('Category not found', 404);
        }
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
