<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all(['id','title','description']);
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $categories = Category::create($request->post());
        return response()->json([
            'message' => 'Category Created Successfuly!!',
            'category' => $categories
        ]);
    }

    public function show(Category $category)
    {
        return response()->json($category);
    }

    public function update(Request $request, Category $category)
    {
        $category->fill($request->post())->save();

        return response()->json([
            'message' => 'Category Update Successfuly!!!',
            'category' => $category
        ]);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'message' => 'Category Deleted Successfuly!!!'
        ]);
    }

    public function create()
    {
        //
    }

    public function edit(Category $category)
    {
        //
    }
}
