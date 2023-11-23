<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Categories listed successfully',
            'data' => $categories,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::create($request->all());

        return response()->json([
            'success' => true,
            'status' => 201,
            'message' => 'Category created successfully',
            'data' => $category,
        ], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category =  Category::find($id);

        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Category retrieved successfully',
            'data' => $category,
        ], 200);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'success' => false,
                'status' => 404,
                'message' => 'Category not found',
            ], 404);
        }
        $category->update($request->all());

        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Category updated successfully',
            'data' => $category,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'success' => false,
                'status' => 404,
                'message' => 'Category not found',
            ], 404);
        }
        $category->delete();
        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Category deleted successfully',
        ], 200);
    }

    public function findProductByCategory(int $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'success' => false,
                'status' => 404,
                'message' => 'Category not found',
            ], 404);
        }
        $products = $category->products()->get();

        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Products retrieved successfully',
            'data' => $products,
        ], 200);
    }
}
