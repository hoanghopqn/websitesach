<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review', function (Blueprint $table) {
            $table->id();
            $table->string('masp',50);
            $table->foreign('masp')
                  ->references('masp')->on('sanpham')->onUpdate('cascade'); 
            $table->string('review_title', 120);
            $table->text('review_details')->nullable();
            $table->timestamp('review_date');
            $table->unsignedTinyInteger('rating_start');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review');
    }
};
