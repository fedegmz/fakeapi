<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateAllMigration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:generate-all-migration';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->call('migrate:reset');
         // Crear las migraciones
        $this->call('migrate');

        // Ejecutar los seeders
        $this->call('db:seed');
    }
}
