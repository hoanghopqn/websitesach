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
        Schema::create('thaydoigia', function (Blueprint $table) {
            $table->id();
            $table->string('masp',50);
            $table->foreign('masp')
            ->references('masp')->on('sanpham')->onUpdate('cascade');
            $table->date('ngayapdung');
            $table->float('giamoi', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thaydoigia');
    }
};
