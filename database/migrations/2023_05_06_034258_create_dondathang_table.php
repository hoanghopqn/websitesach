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
        Schema::create('dondathang', function (Blueprint $table) { 
            $table->id();
            $table->foreignId('khachhang_id')->constrained('khachhang')->onUpdate('cascade');
            $table->foreignId('nhanvien_id')->constrained('nhanvien')->onUpdate('cascade');
            $table->string('diachi',100);
            $table->string('sdt',10);
            $table->text('ghichu');
            $table->integer('thangthai');
            $table->float('tongtien', 8, 2);
            $table->date('thoigiandat');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dondathang');
    }
};
