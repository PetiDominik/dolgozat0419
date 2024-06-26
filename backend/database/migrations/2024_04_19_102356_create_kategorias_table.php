<?php

use App\Models\Kategoria;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKategoriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kategorias', function (Blueprint $table) {
            $table->id();
            $table->string("kategorianev");
            $table->timestamps();
        });

        Kategoria::create(["kategorianev" => "Természetvédelem"]);
        Kategoria::create(["kategorianev" => "Kategória 2"]);
        Kategoria::create(["kategorianev" => "Kategória 3"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kategorias');
    }
}
