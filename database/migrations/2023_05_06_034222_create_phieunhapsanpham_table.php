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
        Schema::create('phieunhapsanpham', function (Blueprint $table) { 
            $table->string('maphieunhap')->unique()->primary();
            $table->foreignId('nhanvien_id')->constrained('nhanvien')->onUpdate('cascade');
            $table->date('ngaynhap');
            $table->float('tongtien', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phieunhapsanpham');
    }
};
