<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\ReviewRepository;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    protected $reviewRepository;
    public function __construct(ReviewRepository $reviewRepository)
    {
        return $this->reviewRepository = $reviewRepository;
    }
    
    public function getReviewbysp(Request $request,$masp)
    {
        return $this->reviewRepository->getReviewbysp($request,$masp);
    } 
    public function index(Request $request)
    {
        return $this->reviewRepository->getReview($request);
    } 
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->reviewRepository->storeReview($request);
    }
    public function edit($id)
    {

        return $this->reviewRepository->editReview($id);
    }
    public function show($id)
    {
        return $this->reviewRepository->showReview($id);
    }
    public function update(Request $request, int $id)
    {
        return $this->reviewRepository->updateReview($request, $id);
    }
    public function destroy($id)
    {
        return $this->reviewRepository->detroyReview($id);
    }
}
