<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        for($i = 0; $i<20; $i++){
            DB::table('news')->insert([
                'title' => fake()->title(),
                'description' => fake()->paragraph(2, true),
                'category' => fake()->sentence(),
                'author' => fake()->email()
            ]);
        }
    }
}
