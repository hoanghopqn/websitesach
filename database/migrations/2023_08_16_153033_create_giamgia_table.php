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
        Schema::create('giamgia', function (Blueprint $table) {
            $table->id();
            $table->string('masp',50);
            $table->foreign('masp')->references('masp')->on('sanpham')->onUpdate('cascade');  
            $table->foreignId('nhanvien_id')->constrained('nhanvien')->onUpdate('cascade');
            $table->text('noidung');
            $table->date('ngaybd');
            $table->date('ngaykt');
            $table->integer('phantram');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('giamgia');
    }
};
