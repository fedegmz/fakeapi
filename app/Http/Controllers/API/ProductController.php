<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       
            return $this->returnJson(
                true,
                200,
                'Products listed successfully',
                $request->has('limit') ? ProductResource::collection(Product::skip($request->offset)->take($request->limit)->get())
                                       : ProductResource::collection(Product::all())
            );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());

        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): JsonResource
    {
        $product = Product::find($id);
        return new ProductResource($product);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'success' => false,
                'status' => 404,
                'message' => 'Product not found',
            ], 404);
        }
        $product->update($request->all());

        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'success' => false,
                'status' => 404,
                'message' => 'Product not found',
            ], 404);
        }
        $product->delete();
        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Product deleted successfully',
        ], 200);
    }

    public function search(Request $request)
    {

        //array de filtros
        $filters = [
            'title' => function ($query, $value) {
                $query->where('title', 'like', '%' . $value . '%');
            },
            'price' => function ($query, $value) {
                $query->where('price', $value);
            },
            'price_min' => function ($query, $value) use ($request) {
                if ($request->has('price_max')) {
                    $query->whereBetween('price', [$value, $request->price_max]);
                }
            },
            'categoryId' => function ($query, $value) {
                $query->where('category_id', $value);
            },
            'offset' => function ($query, $value) use ($request) {
                if ($request->has('limit')) {
                    $query->offset($value)->limit($request->limit);
                }
            },
        ];

        $query = Product::query();

        //recorremos los filtros del array y si existe el filtro en la request
        //ejecutamos la funcion del array pasandole el query y el valor del filtro
        //si no existe el filtro en la request no se ejecuta nada
        foreach ($filters as $filter => $action) {
            if ($request->has($filter)) {
                $action($query, $request->$filter);
            }
        }

        $products = $query->get();
        return ProductResource::collection($products);

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
