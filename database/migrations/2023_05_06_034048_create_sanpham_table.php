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
        Schema::create('sanpham', function (Blueprint $table) {
            $table->string('masp',50)->unique()->primary(); 
            $table->string('tensp',50);
            $table->foreignId('loaisanpham_id')->constrained('loaisanpham')->onUpdate('cascade');
            $table->text('mota');
            $table->float('gia', 8, 2);
            $table->integer('soluongton');
            $table->string('hinhanh', 100)->nullable();
            $table->integer('thangthaisp');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sanpham');
    }
};
