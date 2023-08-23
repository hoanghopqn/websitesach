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
        Schema::create('dstaikhoan', function (Blueprint $table) {
            $table->string('taikhoan',50)->unique()->primary();
            $table->string('matkhau',50);
            $table->foreignId('quyen_id')->constrained('quyen')->onUpdate('cascade');
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
        Schema::dropIfExists('dstaikhoan');
    }
};
