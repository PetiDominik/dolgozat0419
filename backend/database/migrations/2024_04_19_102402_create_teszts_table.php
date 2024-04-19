<?php

use App\Models\Teszt;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTesztsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string("kerdes");
            $table->string("v1");
            $table->string("v2");
            $table->string("v3");
            $table->string("v4");
            $table->string("helyes")->default("v1");
            $table->foreignId("kategoriaId")->references("id")->on("kategorias");
            $table->timestamps();
        });

        Teszt::create(['kerdes' => 'A papírt milyen színű szelektív kukába gyűjtjük?', 'v1' => 'kék', 'v2' => 'piros', 'v3' => 'szürke', 'v4' => 'sárga', 'helyes' => 'v1', 'kategoriaId' => '1',]);
        Teszt::create(['kerdes' => 'Melye komposztálhatóak?',  'v1' => 'zöldség', 'v2' => 'ágak', 'v3' => 'fém', 'v4' => 'ruhanemű', 'helyes' => 'v1', 'kategoriaId' => '1',]);
        Teszt::create(['kerdes' => 'Fogmosásnál...',  'v1' => 'elzarom', 'v2' => 'nem zarom el', 'v3' => 'kitekerem', 'v4' => 'csak akkor', 'helyes' => 'v1', 'kategoriaId' => '1',]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teszts');
    }
}
