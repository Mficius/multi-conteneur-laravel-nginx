<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'completed' => $this->faker->boolean,
        ];
    }
}