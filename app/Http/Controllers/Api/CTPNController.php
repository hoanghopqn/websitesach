<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\CTPNRepository;
use Illuminate\Http\Request;

class CTPNController extends Controller
{
    protected $ctpnRepository;
    public function __construct(CTPNRepository $ctpnRepository)
    {
        return $this->ctpnRepository = $ctpnRepository;
    }

    public function index()
    {
        return $this->ctpnRepository->getCTPN();
    }
    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        return $this->ctpnRepository->storeCTPN($request);
    }
    public function edit($phieunhap_id)
    {

        return $this->ctpnRepository->editCTPN($phieunhap_id);
    }
    public function show($phieunhap_id)
    {
        return $this->ctpnRepository->showCTPN($phieunhap_id);
    }
    public function update(Request $request, string $phieunhap_id)
    {
        return $this->ctpnRepository->updateCTPN($request, $phieunhap_id);
    }
    public function destroy($phieunhap_id)
    {
        return $this->ctpnRepository->detroyCTPN($phieunhap_id);
    }
}
