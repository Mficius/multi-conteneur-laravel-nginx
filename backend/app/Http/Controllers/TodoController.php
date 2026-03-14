<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    public function index()
    {
        return response()->json(
            Todo::latest()->get()
        );
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255'
        ]);

        $todo = Todo::create([
            'title' => $validated['title']
        ]);

        return response()->json($todo, 201);
    }


    public function show($id)
    {
        $todo = Todo::findOrFail($id);

        return response()->json($todo);
    }


    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);

        $todo->update($request->all());

        return response()->json($todo);
    }


    public function destroy($id)
    {
        $todo = Todo::findOrFail($id);

        $todo->delete();

        return response()->json([
            "message" => "Todo deleted"
        ]);
    }
}