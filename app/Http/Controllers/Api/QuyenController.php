<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\QuyenRepository;

class QuyenController extends Controller
{
    protected $quyenRepository;
    public function __construct(QuyenRepository $quyenRepository)
    {
        return $this->quyenRepository = $quyenRepository;
    }

    public function index()
    {
        return $this->quyenRepository->getQuyen();
    }
}
