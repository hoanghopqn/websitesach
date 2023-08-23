import {
    GET_DSTAIKHOAN,
    GET_GIAMGIA,
    GET_KHACHHANG,
    GET_NHANVIEN,
    GET_PHIEUNHAP,
    GET_DISPLAY_SANPHAM,
    FILTER_BY_TACGIA,
    FILTER_BY_NUOCSX,
    FILTER_BY_THELOAI,
    FILTER_BY_RATING,
    GET_TACGIA_NAME,
    GET_NUOCSX_NAME,
    GET_THELOAI_NAME,
    GET_CTGG,
    GET_NHANVIENMETA,
    GET_FILTERNHANVIENPAGE,
    GET_FILTERNHANVIENLIMIT,
    GET_KHACHHANGMETA,
    GET_FILTERKHACHHANGLIMIT,
    GET_FILTERKHACHHANGPAGE,
    GET_SANPHAMMETA,
    GET_FILTERSANPHAMLIMIT,
    GET_FILTERSANPHAMPAGE,
    GET_SANPHAM,
    GET_FILTERPHIEUNHAPPAGE,
    GET_FILTERPHIEUNHAPLIMIT,
    GET_PHIEUNHAPMETA,
    GET_CTPN,
    HANDLE_PAGINATE,
    GET_PAGINATION,
    GET_DONDATHANG,
    GET_FILTERDONDATHANGPAGE,
    GET_FILTERDONDATHANGLIMIT,
    GET_DONDATHANGMETA,
    GET_CTDDH,
    GET_QUYEN_NAME,
    GET_DETAIL_SANPHAM,
    SET_FILTER_SORT,
    HANDLE_LIMIT,
    SET_FILTER_SHOW,
    GET_FILTERDONDATHANGLINK,
    GET_USERDDH,
    SET_FILTERUSERDDHLINK,
    GET_USERID,
    GET_FILTERTACGIAPAGE,
    GET_TACGIA,
    GET_FILTERTACGIALIMIT,
    GET_TACGIAMETA,
    GET_NUOC,
    GET_FILTERNUOCPAGE,
    GET_FILTERNUOCLIMIT,
    GET_NUOCMETA,
    GET_REVIEW,
    GET_FILTERGET_REVIEWPAGE,
    GET_FILTERGET_REVIEWLIMIT,
    GET_REVIEWMETA,
    GET_FILTERDSTAIKHOANLIMIT,
    GET_FILTERDSTAIKHOANPAGE,
    GET_DSTAIKHOANMETA,
} from "../Constants/sanphamConstants";

export const getTheLoaiName = (data) => {
    return {
        type: GET_THELOAI_NAME,
        payload: data,
    };
};

export const getNuocSXName = (data) => {
    return {
        type: GET_NUOCSX_NAME,
        payload: data,
    };
};

export const getPagination = (data) => {
    return {
        type: GET_PAGINATION,
        payload: data,
    };
};
export const getTacGiaName = (data) => {
    return {
        type: GET_TACGIA_NAME,
        payload: data,
    };
};

export const getQuyenName = (data) => {
    return {
        type: GET_QUYEN_NAME,
        payload: data,
    };
};

export const getDetaiSanPham = (data) => {
    return {
        type: GET_DETAIL_SANPHAM,
        payload: data,
    };
};

export const filterByTheLoai = (data) => {
    return {
        type: FILTER_BY_THELOAI,
        payload: data,
    };
};

export const filterByNuocSX = (data) => {
    return {
        type: FILTER_BY_NUOCSX,
        payload: data,
    };
};

export const filterByTacGia = (data) => {
    return {
        type: FILTER_BY_TACGIA,
        payload: data,
    };
};

export const filterByRating = (data) => {
    return {
        type: FILTER_BY_RATING,
        payload: data,
    };
};

export const setFilterSort = (data) => {
    return {
        type: SET_FILTER_SORT,
        payload: data,
    };
};

export const setFilterShow = (data) => {
    return {
        type: SET_FILTER_SHOW,
        payload: data,
    };
};

export const handlePaginate = (data) => {
    return {
        type: HANDLE_PAGINATE,
        payload: data,
    };
};
export const getName = (getDSName, id) => {
    const isLargeNumber = (element) => element.id === id;
    const Id_name = getDSName.findIndex(isLargeNumber);
    return getDSName[Id_name];
}

export const getNhanVien = (data) => {
    return {
        type: GET_NHANVIEN,
        payload: data,
    };
};

export const getNVFilterPage = (data) => {
    return {
        type: GET_FILTERNHANVIENPAGE,
        payload: data,
    };
};

export const getNVFilterLimit = (data) => {
    return {
        type: GET_FILTERNHANVIENLIMIT,
        payload: data,
    };
};
export const getMetaNhanVien = (data) => {
    return {
        type: GET_NHANVIENMETA,
        payload: data,
    };
};
export const getKhachHang = (data) => {
    return {
        type: GET_KHACHHANG,
        payload: data,
    };
};
export const getKHFilterPage = (data) => {
    return {
        type: GET_FILTERKHACHHANGPAGE,
        payload: data,
    };
};

export const getKHFilterLimit = (data) => {
    return {
        type: GET_FILTERKHACHHANGLIMIT,
        payload: data,
    };
};
export const getMetaKhachHang = (data) => {
    return {
        type: GET_KHACHHANGMETA,
        payload: data,
    };
};
export const getSanPham = (data) => {
    return {
        type: GET_SANPHAM,
        payload: data,
    };
};
export const getSPFilterPage = (data) => {
    return {
        type: GET_FILTERSANPHAMPAGE,
        payload: data,
    };
};

export const getSPFilterLimit = (data) => {
    return {
        type: GET_FILTERSANPHAMLIMIT,
        payload: data,
    };
};
export const getMetaSanPham = (data) => {
    return {
        type: GET_SANPHAMMETA,
        payload: data,
    };
};
export const getPhieuNhap = (data) => {
    return {
        type: GET_PHIEUNHAP,
        payload: data,
    };
};

export const getPNFilterPage = (data) => {
    return {
        type: GET_FILTERPHIEUNHAPPAGE,
        payload: data,
    };
};

export const getPNFilterLimit = (data) => {
    return {
        type: GET_FILTERPHIEUNHAPLIMIT,
        payload: data,
    };
};
export const getMetaPhieuNhap = (data) => {
    return {
        type: GET_PHIEUNHAPMETA,
        payload: data,
    };
};
export const getCTPhieuNhap = (data) => {
    return {
        type: GET_CTPN,
        payload: data,
    };
};

export const getDonDatHang = (data) => {
    return {
        type: GET_DONDATHANG,
        payload: data,
    };
};

export const getDDHFilterPage = (data) => {
    return {
        type: GET_FILTERDONDATHANGPAGE,
        payload: data,
    };
};
export const getDDHFilterLink = (data) => {
    return {
        type: GET_FILTERDONDATHANGLINK,
        payload: data,
    };
};

export const getDDHFilterLimit = (data) => {
    return {
        type: GET_FILTERDONDATHANGLIMIT,
        payload: data,
    };
};
export const getMetaDonDatHang = (data) => {
    return {
        type: GET_DONDATHANGMETA,
        payload: data,
    };
};
export const getUserDDH = (data) => {
    return {
        type: GET_USERDDH,
        payload: data,
    };
};
export const getUerDDHLink = (data) => {
    return {
        type: SET_FILTERUSERDDHLINK,
        payload: data,
    };
};
export const getUerID = (data) => {
    return {
        type: GET_USERID,
        payload: data,
    };
};
export const getDisplaySanPham = (data) => {
    return {
        type: GET_DISPLAY_SANPHAM,
        payload: data,
    };
};
export const getCTDonDatHang = (data) => {
    return {
        type: GET_CTDDH,
        payload: data,
    };
};
export const getGiamGia = (data) => {
    return {
        type: GET_GIAMGIA,
        payload: data,
    };
};

export const getCTGiamGia = (data) => {
    return {
        type: GET_CTGG,
        payload: data,
    };
};
export const getDSTaiKhoan = (data) => {
    return {
        type: GET_DSTAIKHOAN,
        payload: data,
    };
};
export const getDSTaiKhoanFilterPage = (data) => {
    return {
        type: GET_FILTERDSTAIKHOANPAGE,
        payload: data,
    };
};

export const getDSTaiKhoanFilterLimit = (data) => {
    return {
        type: GET_FILTERDSTAIKHOANLIMIT,
        payload: data,
    };
};
export const getMetaDSTaiKhoan = (data) => {
    return {
        type: GET_DSTAIKHOANMETA,
        payload: data,
    };
};
export const getTacGia = (data) => {
    return {
        type: GET_TACGIA,
        payload: data,
    };
};
export const getTGFilterPage = (data) => {
    return {
        type: GET_FILTERTACGIAPAGE,
        payload: data,
    };
};

export const getTGFilterLimit = (data) => {
    return {
        type: GET_FILTERTACGIALIMIT,
        payload: data,
    };
};
export const getMetaTacGia = (data) => {
    return {
        type: GET_TACGIAMETA,
        payload: data,
    };
};
export const getNuoc = (data) => {
    return {
        type: GET_NUOC,
        payload: data,
    };
};
export const getNFilterPage = (data) => {
    return {
        type: GET_FILTERNUOCPAGE,
        payload: data,
    };
};

export const getNFilterLimit = (data) => {
    return {
        type: GET_FILTERNUOCLIMIT,
        payload: data,
    };
};
export const getMetaNuoc = (data) => {
    return {
        type: GET_NUOCMETA,
        payload: data,
    };
};
export const getReview = (data) => {
    return {
        type: GET_REVIEW,
        payload: data,
    };
};
export const getRVFilterPage = (data) => {
    return {
        type: GET_FILTERGET_REVIEWPAGE,
        payload: data,
    };
};

export const getRVFilterLimit = (data) => {
    return {
        type: GET_FILTERGET_REVIEWLIMIT,
        payload: data,
    };
};
export const getMetaReview = (data) => {
    return {
        type: GET_REVIEWMETA,
        payload: data,
    };
};