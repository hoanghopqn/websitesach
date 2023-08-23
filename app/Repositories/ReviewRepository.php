<?php

namespace App\Repositories;

use App\Http\Resources\ReviewCollection;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;

class ReviewRepository
{
    public function getReviewbysp($request,$masp)
    {
        if ($limit = $request->input('limit')) {};
        $query = new ReviewCollection(Review::getReview()->where('review.masp',$masp)->paginate($limit));

        return response()->json([
            'review' => $query,
        ], 200);
    } 
    public function getReview($request)
    {
        if ($limit = $request->input('limit')) {};
        $query = new ReviewCollection(Review::getReview()->paginate($limit));

        return response()->json([
            'review' => $query,
        ], 200);
    } 
    public function storeReview($request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [ 
            'masp'=> 'required',
            'review_title'=> 'required',
            'review_details'=> 'required',
            'review_date'=> 'required',
            'rating_start'=> 'required' 
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $review = Review::create([ 
                'masp' => $request->masp,
                'review_title' => $request->review_title,
                'review_details' => $request->review_details,
                'review_date' => $request->review_date,
                'rating_start' => $request->rating_start  
            ]);
        }
        if ($review) {
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả create successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Somethings went wrong!",
            ], 500);

        }
    }
    public function showReview($id)
    {
        $review = Review::find($id);
        if ($review) {
            return response()->json([
                "status" => 200,
                "review" => $review,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Student Founds!",
            ], 404);

        }
    }
    public function editReview($id)
    {
        $review = Review::find($id);
        if ($review) {
            return response()->json([
                "status" => 200,
                "review" => $review,
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "No Tác Giả Founds!",
            ], 404);

        }
    }
    public function updateReview($request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'masp'=> 'required',
            'review_title'=> 'required',
            'review_details'=> 'required',
            'review_date'=> 'required',
            'rating_start'=> 'required' 
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ], 422);
        } else {
            $review = Review::find($id);
        }
        if ($review) {
            $review->update([
                'masp' => $request->masp,
                'review_title' => $request->review_title,
                'review_details' => $request->review_details,
                'review_date' => $request->review_date,
                'rating_start' => $request->rating_start  

            ]);
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả updated successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
    public function detroyReview($request, $id)
    {
        $review = Review::find($id);
        if ($review) {
            $review->delete();
            return response()->json([
                "status" => 200,
                "message" => "Tác Giả delete successfully.",
            ], 200);
        } else {
            return response()->json([
                "status" => 404,
                "message" => "Somethings went wrong!",
            ], 404);

        }
    }
}
