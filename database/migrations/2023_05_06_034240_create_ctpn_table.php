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
        Schema::create('ctpn', function (Blueprint $table) { 
            $table->string('phieunhap_id',50);
            $table->foreign('phieunhap_id')
            ->references('maphieunhap')->on('phieunhapsanpham')->onUpdate('cascade'); 
            $table->string('masp',50);
            $table->foreign('masp')
            ->references('masp')->on('sanpham')->onUpdate('cascade');
            $table->integer('soluong');
            $table->float('dongia', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ctpn');
    }
};
