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
        Schema::create('nhanvien', function (Blueprint $table) {
            $table->id();
            $table->string('hoten',100);
            $table->string('sdt',10);
            $table->string('diachi',100);
            $table->date('ngaysinh');
            $table->date('ngayvaolam');
            $table->string('email',50)->unique();
            $table->string('taikhoan',50);
            $table->foreign('taikhoan')
            ->references('taikhoan')->on('dstaikhoan')->onUpdate('cascade');
            $table->string('hinhanh', 100)->nullable();
            $table->integer('thangthai');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nhanvien');
    }
};
