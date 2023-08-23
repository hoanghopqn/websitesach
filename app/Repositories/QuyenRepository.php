<?php

namespace App\Repositories;

use App\Http\Resources\QuyenCollection;
use App\Models\Quyen;

class QuyenRepository
{
    public function getQuyen()
    {
        $query = new QuyenCollection(Quyen::getQuyen()->get());

        return response()->json([
            'quyen' => $query,
        ], 200);
    }
}
