<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\PaymentRepository;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    protected $paymentRepository;
    public function __construct(PaymentRepository $paymentRepository)
    {
        return $this->paymentRepository = $paymentRepository;
    }
     
    public function createVNPT()
    {
        return $this->paymentRepository->createVNPT();
    }
}
