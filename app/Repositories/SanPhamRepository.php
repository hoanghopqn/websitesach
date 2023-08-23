<?php

namespace App\Repositories;

use App\Http\Resources\SanPhamCollection;
use App\Http\Resources\TacGiaCollection;
use App\Http\Resources\ThayDoiGiaCollection;
use App\Models\SanPham;
use App\Models\TacGia;
use Illuminate\Support\Facades\Validator;

class SanPhamRepository
{

    //in sắp xép theo chiết xuất,giá
    public function getSanPhamSale($request)
    {
        $query = SanPham::getDetail()->supPrice('desc');
        if ($limit = $request->input('limit')) {
        };
        if ($sort = $request->input('sort')) {
            $query->price($sort);
        } else {
            $query->price('asc');
        }
        if ($nuocsx = $request->input('nuocsx')) {
            $query->where('sanpham.nuoc_id', $nuocsx);
        }
        if ($theloai = $request->input('theloai')) {
            $query->where('sanpham.loaisanpham_id', $theloai);
        }
        if ($tacgia = $request->input('tacgia')) {
            $query->where('sanpham.tacgia_id', $tacgia);
        }
        if ($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(CAST(review.rating_start as INT)), 0) >= ?', [$star]);
        }
        $query = $query->paginate($limit);
        $query = new SanPhamCollection($query);
        return response()->json(['sanpham' => $query], 200);
    }

    public function getRecommend($request)
    {
        $query = SanPham::getDetail()->avgStarts()->price('asc')->paginate(15);
        $query = new SanPhamCollection($query);
        return response()->json(['sanpham' => $query], 200);
    }
    //phổ biến: tổng số reviews và giá
    public function getPopular($request)
    {
        $query = SanPham::getDetail()->countStars()->price('asc');
        if ($limit = $request->input('limit')) {
        };

        if ($nuocsx = $request->input('nuocsx')) {
            $query->where('sanpham.nuoc_id', $nuocsx);
        }
        if ($theloai = $request->input('theloai')) {
            $query->where('sanpham.loaisanpham_id', $theloai);
        }
        if ($tacgia = $request->input('tacgia')) {
            $query->where('sanpham.tacgia_id', $tacgia);
        }
        if ($star = $request->input('star')) {
            $query->havingRaw('COALESCE(AVG(CAST(review.rating_start as INT)), 0) >= ?', [$star]);
        }
        $query = $query->paginate($limit);
        $query = new SanPhamCollection($query);
        return response()->json(['sanpham' => $query], 200);
    }
    //tất cả sách theo giá
    public function getSanPhamAll($request)
    {
        if ($sort = $request->input('sort')) { 
        };
        if ($limit = $request->input('limit')) {
        };
        $query = SanPham::getDetail()->price($sort)->paginate($limit);
        $query = new SanPhamCollection($query);
        return response()->json(['sanpham' => $query], 200);
    }
    public function getSanPhamDetails($masp)
    {
        $sanpham = SanPham::getDetail()->where('sanpham.masp', $masp)->get(); 
        
        return response()->json([
            'sanpham' => $sanpham,
        ], 200);
    } 
    public function getSanPhambyTheLoai($loaisanpham_id)
    {
        $sanpham = SanPham::getDetail()->where('sanpham.loaisanpham_id', $loaisanpham_id)->get(); 
        
        return response()->json([
            'sanpham' => $sanpham,
        ], 200);
    }
     public function getsearchDetails($request,$tensp)
      {
        if ($limit = $request->input('limit')) {
        };
          $sanpham = SanPham::getDetail()->where('sanpham.tensp','like','%'.$tensp.'%')->paginate($limit); 
          $sanpham = new SanPhamCollection($sanpham);
      return response()->json([
          'sanpham'=>$sanpham
      ],200) ;
      }
    public function getAuthorCategory()
    {
        $LoaiSanPham = LoaiSanPham::category()->get();
        $LoaiSanPham = new ThayDoiGiaCollection($LoaiSanPham);
        $TacGia = TacGia::author()->get();
        $TacGia = new TacGiaCollection($TacGia);
        return response()->json([
            'loaisanpham' => $LoaiSanPham,
            'tacgia' => $TacGia,
        ], 200);
    } 
    public function getSanPham($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new SanPhamCollection(SanPham::getDetail()->paginate($limit));

        return response()->json([
            'sanpham' => $query,
        ], 200);
    }
    public function showSanPham($masp)
    {
        $sanpham = SanPham::where('sanpham.masp', $masp)->get(); 
        if ($sanpham) {
            return response()->json([
                "status" => 200,
                "sanpham" => $sanpham,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editSanPham($masp)
    {
        $sanpham = SanPham::where('sanpham.masp', $masp)->get(); 
        if ($sanpham) {
            return response()->json([
                "status" => 200,
                "sanpham" => $sanpham,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Tác Giả Founds!",
            ], 404);

        }
    }
    public function storeSanPham($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'masp' => 'required',
            'tensp' => 'required',
            'loaisanpham_id' => 'required',
            'mota' => 'required',
            'gia' => 'required',
            'soluongton' => 'required',
            'hinhanh' => 'required',
            'thangthaisp' => 'required',
            'tacgia_id' => 'required',
            'nuoc_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $sanpham = SanPham::create([ 
                'masp' => $request->masp,
                'tensp' => $request->tensp,
                'loaisanpham_id' => $request->loaisanpham_id,
                'mota' => $request->mota,
                'gia' => $request->gia,
                'soluongton' => $request->soluongton,
                'hinhanh' => $request->hinhanh,
                'thangthaisp' => $request->thangthaisp,
                'tacgia_id' => $request->tacgia_id,
                'nuoc_id' => $request->nuoc_id,
            ]);
        }
        if ($sanpham) {
            return response()->json([
                "status" => 200,
                "message" => "San Pham create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function updateSanPham($request, $masp)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'masp' => 'required',
            'tensp' => 'required',
            'loaisanpham_id' => 'required',
            'mota' => 'required',
            'gia' => 'required',
            'soluongton' => 'required',
            'hinhanh' => 'required',
            'thangthaisp' => 'required',
            'tacgia_id' => 'required',
            'nuoc_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $sanpham = SanPham::where('sanpham.masp', $masp);  
        }
        if ($sanpham) {
            $sanpham->update([
                'masp' => $request->masp,
                'tensp' => $request->tensp,
                'loaisanpham_id' => $request->loaisanpham_id,
                'mota' => $request->mota,
                'gia' => $request->gia,
                'soluongton' => $request->soluongton,
                'hinhanh' => $request->hinhanh,
                'thangthaisp' => $request->thangthaisp,
                'tacgia_id' => $request->tacgia_id,
                'nuoc_id' => $request->nuoc_id, 
            ]);
            return response()->json([
                "status" => 200,
                "message" => "San Pham updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroySanPham($request, $id)
    {
        $sanpham = SanPham::where('sanpham.masp', $masp)->get(); 
        if ($sanpham) {
            $sanpham->delete();
            return response()->json([
                "status" => 200,
                "message" => "San Pham delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
