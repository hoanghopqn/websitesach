<?php

use App\Http\Controllers\Api\SanPhamController;
use App\Http\Controllers\Api\LoaiSanPhamController;
use App\Http\Controllers\Api\NuocSXController;
use App\Http\Controllers\Api\TacGiaController;
use App\Http\Controllers\Api\DonDatHangController;
use App\Http\Controllers\Api\CTDDHController;
use App\Http\Controllers\Api\DSTaiKhoanController;
use App\Http\Controllers\Api\GiamGiaController;
use App\Http\Controllers\Api\KhachHangController;
use App\Http\Controllers\Api\NhanVienController;
use App\Http\Controllers\Api\CTGGController;
use App\Http\Controllers\Api\PhieuNhapSanPhamController;
use App\Http\Controllers\Api\CTPNController;
use App\Http\Controllers\Api\QuyenController;   
use App\Http\Controllers\Api\ReviewController;   
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/get-sanpham-sale', [SanPhamController::class, 'getSanPhamSale']);
Route::get('/get-recommend', [SanPhamController::class, 'getRecommend']);
Route::get('/get-popular', [SanPhamController::class, 'getPopular']);
Route::get('/get-books-all', [SanPhamController::class, 'getSanPhamAll']); 
Route::get('/SanPhamDetail/{masp}', [SanPhamController::class, 'getSanPhamDetails']);
Route::get('/SearchDetail/{tensp}', [SanPhamController::class, 'getsearchDetails']);
Route::get('/get-author-category', [SanPhamController::class, 'getAuthorCategory']);
Route::get('/SanPhamBytheloai/{theloai_id}', [SanPhamController::class, 'getSanPhambyTheLoai']);
Route::get('/SearchNV/{tennv}', [NhanVienController::class, 'getsearchNV']);
Route::get('/SearchKH/{tenkh}', [KhachHangController::class, 'getsearchKH']);
Route::get('/SearchDSTK/{taikhoan}', [DSTaiKhoanController::class, 'getsearchDSTK']);
Route::get('/SearchPN/{maphieunhap}', [PhieuNhapSanPhamController::class, 'getsearchPN']);
Route::get('/SearchTG/{tentg}', [TacGiaController::class, 'getsearchTG']);
Route::get('/SearchN/{tennuoc}', [NuocSXController::class, 'getsearchN']);
Route::get('/reviewbysp/{masp}', [ReviewController::class, 'getReviewbysp']);

Route::prefix('names')->group(function () {
    Route::resource('/loaisanpham', LoaiSanPhamController::class)->only(['index']); 
    Route::resource('/nuocsx', NuocSXController::class)->only([
        'index', 'store', 'show','edit', 'update', 'destroy'
    ]);   
    Route::resource('/tacgia', TacGiaController::class)->only([
        'index', 'store', 'show','edit', 'update', 'destroy'
    ]);   
    Route::resource('/quyen', QuyenController::class)->only([
        'index'
    ]);   
});

Route::post('/login', [DSTaiKhoanController::class, 'login']);
Route::prefix('quanly')->group(function () {  
}); 
Route::resource('/nhanvien', NhanVienController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/khachhang', KhachHangController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/giamgia', GiamGiaController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/dondathang', DonDatHangController::class)->only([
    'index', 'store', 'edit', 'update', 'destroy'
]);  
Route::get('/dondathangbytt/{trangthai}', [DonDatHangController::class, 'ddhbytt']);
Route::resource('/ctddh', CTDDHController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/dstaikhoan', DSTaiKhoanController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);     
Route::resource('/phieunhapsanpham', PhieuNhapSanPhamController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);    
Route::resource('/ctpn', CTPNController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);    
Route::resource('/tacgia', TacGiaController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/nuoc', NuocSXController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
Route::resource('/review', ReviewController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);  
// Route::resource('/sanpham', SanPhamController::class)->except([
//     'index',  'show','edit',  'destroy'
// ]);  
Route::resource('/sanpham', SanPhamController::class)->only([
    'index', 'store', 'show','edit', 'update', 'destroy'
]);   
 
// Route::put('/updatesanpham/{masp}', [SanPhamController::class, 'updateSanPham']); 