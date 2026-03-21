<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Todo;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TodoApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test: récupérer la liste des todos
     */
    public function test_can_get_all_todos()
    {
        // Arrange (préparer les données)
        Todo::factory()->count(3)->create();

        // Act (appel API)
        $response = $this->getJson('/api/todos');

        // Assert (vérifications)
        $response->assertStatus(200)
                 ->assertJsonCount(10);
    }

    /**
     * Test: vérifier la structure JSON
     */
    public function test_todos_have_expected_structure()
    {
        Todo::factory()->create([
            'title' => 'Test Todo',
            'completed' => false
        ]);

        $response = $this->getJson('/api/todos');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     '*' => [
                         'id',
                         'title',
                         'completed',
                         'created_at',
                         'updated_at'
                     ]
                 ]);
    }

    /**
     * Test: vérifier l'ordre (latest)
     */
    public function test_todos_are_ordered_by_latest()
    {
        $old = Todo::factory()->create([
            'created_at' => now()->subDays(2)
        ]);

        $new = Todo::factory()->create([
            'created_at' => now()
        ]);

        $response = $this->getJson('/api/todos');

        $response->assertStatus(200);

        $data = $response->json();

        // Le plus récent doit être en premier
        $this->assertEquals($new->id, $data[0]['id']);
    }

    /**
     * Test: liste vide
     */
    public function test_returns_empty_array_when_no_todos()
    {
        $response = $this->getJson('/api/todos');

        $response->assertStatus(200)
                 ->assertExactJson([]);
    }
}