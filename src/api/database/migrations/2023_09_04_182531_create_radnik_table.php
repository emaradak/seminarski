<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('radnik', function (Blueprint $table) {
            $table->id();
            $table->string('ime');
            $table->string('prezime');
            $table->unsignedBigInteger('tim_id');
            $table->unsignedBigInteger('nivo_id');
            $table->date('datum_rodjenja');
            $table->timestamps();

            $table->foreign('tim_id')->references('id')->on('tim');
            $table->foreign('nivo_id')->references('id')->on('nivo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('radnik');
    }
};
