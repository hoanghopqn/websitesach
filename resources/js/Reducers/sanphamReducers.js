const initState = {
    displaySanPham: [],
    listNhanVien: {
        listNhanViendata: [],
        filterNV: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listKhachHang: {
        listKhachHangdata: [],
        filterKH: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listTacGia: {
        listTacGiadata: [],
        filterTG: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listNuoc: {
        listNuocdata: [],
        filterN: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    pagination: {},
    listGiamGia: [],
    listDSTaiKhoan: {
        listDSTaiKhoandata: [],
        filterDSTK: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listDDH: {
        listDDHdata: [],
        filter: {
            link: "dondathangbytt/1",
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listUserDDH: {
        listUserDDHdata: [],
        link: 'dondathangbytt/1',
        user_id: '',
    },
    listCTDDH: [],
    listPhieuNhap: {
        listPhieuNhapdata: [],
        filterPN: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listReview: {
        listReviewdata: [],
        filterRV: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listCTPN: [],
    listTheLoaiName: [],
    listTacGiaName: [],
    listNuocSXName: [],
    listQuyen: [],
    listSanPham: {
        listSanPhamdata: [],
        filterSP: {
            limit: 15,
            page: 1,
        },
        meta: {},
    },
    listCTGG: [],
    idGG: 'madot001',
    detailSanPham: {},
    filter: {
        limit: 15,
        sort: "",
        sort_review: "DESC",
        link: "get-sanpham-sale",
        tacgia: "",
        nuocsx: "",
        theloai: [],
        star: "",
        page: 1,
    },
    totalCart: 0,
    nameUser: "",
};

const sanphamReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_THELOAI_NAME":
            return {
                ...state,
                listTheLoaiName: action.payload,
            };
        case "GET_TACGIA_NAME":
            return {
                ...state,
                listTacGiaName: action.payload,
            };
        case "GET_NUOCSX_NAME":
            return {
                ...state,
                listNuocSXName: action.payload,
            };
        case "GET_QUYEN_NAME":
            return {
                ...state,
                listQuyen: action.payload,
            };
        case "GET_DISPLAY_SANPHAM":
            return {
                ...state,
                displaySanPham: action.payload,
            };
        case "GET_NHANVIEN":
            return {
                ...state,
                listNhanVien: {
                    ...state.listNhanVien,
                    listNhanViendata: action.payload,
                },
            };
        case "GET_NHANVIENMETA":
            return {
                ...state,
                listNhanVien: {
                    ...state.listNhanVien,
                    meta: action.payload,
                },
            };
        case "GET_FILTERNHANVIENLIMIT":
            return {
                ...state,
                listNhanVien: {
                    ...state.listNhanVien,
                    filterNV: {
                        ...state.listNhanVien.filterNV,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERNHANVIENPAGE":
            return {
                ...state,
                listNhanVien: {
                    ...state.listNhanVien,
                    filterNV: {
                        ...state.listNhanVien.filterNV,
                        page: action.payload,
                    },
                },
            };
        case "GET_KHACHHANG":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    listKhachHangdata: action.payload,
                },
            };
        case "GET_KHACHHANGMETA":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    meta: action.payload,
                },
            };
        case "GET_FILTERKHACHHANGLIMIT":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    filterKH: {
                        ...state.listKhachHang.filterKH,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERKHACHHANGPAGE":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    filterKH: {
                        ...state.listKhachHang.filterKH,
                        page: action.payload,
                    },
                },
            };
        case "GET_KHACHHANG":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    listKhachHangdata: action.payload,
                },
            };
        case "GET_KHACHHANGMETA":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    meta: action.payload,
                },
            };
        case "GET_FILTERKHACHHANGLIMIT":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    filterKH: {
                        ...state.listKhachHang.filterKH,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERKHACHHANGPAGE":
            return {
                ...state,
                listKhachHang: {
                    ...state.listKhachHang,
                    filterKH: {
                        ...state.listKhachHang.filterKH,
                        page: action.payload,
                    },
                },
            };

        case "GET_TACGIA":
            return {
                ...state,
                listTacGia: {
                    ...state.listTacGia,
                    listTacGiadata: action.payload,
                },
            };
        case "GET_TACGIAMETA":
            return {
                ...state,
                listlistTacGia: {
                    ...state.listTacGia,
                    meta: action.payload,
                },
            };
        case "GET_FILTERTACGIALIMIT":
            return {
                ...state,
                listTacGia: {
                    ...state.listTacGia,
                    filterTG: {
                        ...state.listTacGia.filterTG,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERKHACHHANGPAGE":
            return {
                ...state,
                listTacGia: {
                    ...state.listTacGia,
                    filterTG: {
                        ...state.listTacGia.filterTG,
                        page: action.payload,
                    },
                },
            };

        case "GET_NUOC":
            return {
                ...state,
                listNuoc: {
                    ...state.listNuoc,
                    listNuocdata: action.payload,
                },
            };
        case "GET_NUOCMETA":
            return {
                ...state,
                listNuoc: {
                    ...state.listNuoc,
                    meta: action.payload,
                },
            };
        case "GET_FILTERNUOCLIMIT":
            return {
                ...state,
                listNuoc: {
                    ...state.listNuoc,
                    filterN: {
                        ...state.listNuoc.filterN,
                        limit: action.payload,
                    },
                },
            };
        case "GET_FILTERNUOCPAGE":
            return {
                ...state,
                listNuoc: {
                    ...state.listNuoc,
                    filterN: {
                        ...state.listNuoc.filterN,
                        page: action.payload,
                    },
                },
            };
        case "GET_SANPHAM":
            return {
                ...state,
                listSanPham: {
                    ...state.listSanPham,
                    listSanPhamdata: action.payload,
                },
            };
        case "GET_SANPHAMMETA":
            return {
                ...state,
                listSanPham: {
                    ...state.listSanPham,
                    meta: action.payload,
                },
            };
        case "GET_FILTERSANPHAMLIMIT":
            return {
                ...state,
                listSanPham: {
                    ...state.listSanPham,
                    filterSP: {
                        ...state.listSanPham.filterSP,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERSANPHAMPAGE":
            return {
                ...state,
                listSanPham: {
                    ...state.listSanPham,
                    filterSP: {
                        ...state.listSanPham.filterSP,
                        page: action.payload,
                    },
                },
            };

        case "GET_PHIEUNHAP":
            return {
                ...state,
                listPhieuNhap: {
                    ...state.listPhieuNhap,
                    listPhieuNhapdata: action.payload,
                },
            };
        case "GET_PHIEUNHAPMETA":
            return {
                ...state,
                listPhieuNhap: {
                    ...state.listPhieuNhap,
                    meta: action.payload,
                },
            };
        case "GET_FILTERPHIEUNHAPLIMIT":
            return {
                ...state,
                listPhieuNhap: {
                    ...state.listPhieuNhap,
                    filterPN: {
                        ...state.listPhieuNhap.filterPN,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERPHIEUNHAPPAGE":
            return {
                ...state,
                listPhieuNhap: {
                    ...state.listPhieuNhap,
                    filterPN: {
                        ...state.listPhieuNhap.filterPN,
                        page: action.payload,
                    },
                },
            };


        case "GET_REVIEW":
            return {
                ...state,
                listReview: {
                    ...state.listReview,
                    listReviewdata: action.payload,
                },
            };
        case "GET_REVIEWMETA":
            return {
                ...state,
                listReview: {
                    ...state.listReview,
                    meta: action.payload,
                },
            };
        case "GET_FILTERREVIEWLIMIT":
            return {
                ...state,
                listReview: {
                    ...state.listReview,
                    filterPN: {
                        ...state.listReview.filterRV,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERREVIEWPAGE":
            return {
                ...state,
                listReview: {
                    ...state.listReview,
                    filterPN: {
                        ...state.listReview.filterRV,
                        page: action.payload,
                    },
                },
            };

        case "GET_CTPN":
            return {
                ...state,
                listCTPN: action.payload,
            };
        case "GET_DONDATHANG":
            return {
                ...state,
                listDDH: {
                    ...state.listDDH,
                    listDDHdata: action.payload,
                },
            };
        case "GET_DONDATHANGMETA":
            return {
                ...state,
                listDDH: {
                    ...state.listDDH,
                    meta: action.payload,
                },
            };
        case "GET_FILTERDONDATHANGLIMIT":
            return {
                ...state,
                listDDH: {
                    ...state.listDDH,
                    filter: {
                        ...state.listDDH.filter,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERDONDATHANGPAGE":
            return {
                ...state,
                listDDH: {
                    ...state.listDDH,
                    filter: {
                        ...state.listDDH.filter,
                        page: action.payload,
                    },
                },
            };
        case "GET_FILTERDONDATHANGLINK":
            return {
                ...state,
                listDDH: {
                    ...state.listDDH,
                    filter: {
                        ...state.listDDH.filter,
                        link: action.payload,
                    },
                },
            };
        case "GET_USERDDH":
            return {
                ...state,
                listUserDDH: {
                    ...state.listUserDDH,
                    listUserDDHdata: action.payload,
                },
            };
        case "GET_USERID":
            return {
                ...state,
                listUserDDH: {
                    ...state.listUserDDH,
                    user_id: action.payload,
                },
            };
        case "SET_FILTERUSERDDHLINK":
            return {
                ...state,
                listUserDDH: {
                    ...state.listUserDDH,
                    link: action.payload,
                },
            };
        case "GET_CTDDH":
            return {
                ...state,
                listCTDDH: {
                    ...state.listCTDDH,
                    listCTDDH: action.payload,
                },
            };
        case "GET_GIAMGIA":
            return {
                ...state,
                listGiamGia: action.payload,
            };
        case "GET_CTGG":
            return {
                ...state,
                listCTGG: action.payload,
            };
        case "GET_DSTAIKHOAN":
            return {
                ...state,
                listDSTaiKhoan: {
                    ...state.listDSTaiKhoan,
                    listDSTaiKhoandata: action.payload,
                },
            };
        case "GET_DSTAIKHOANMETA":
            return {
                ...state,
                listDSTaiKhoan: {
                    ...state.listDSTaiKhoan,
                    meta: action.payload,
                },
            };
        case "GET_FILTERDSTAIKHOANLIMIT":
            return {
                ...state,
                listDSTaiKhoan: {
                    ...state.listDSTaiKhoan,
                    filterDSTK: {
                        ...state.listDSTaiKhoan.filterDSTK,
                        limit: action.payload,
                    },
                },
            }
        case "GET_FILTERDSTAIKHOANPAGE":
            return {
                ...state,
                listDSTaiKhoan: {
                    ...state.listDSTaiKhoan,
                    filterDSTK: {
                        ...state.listDSTaiKhoan.filterDSTK,
                        page: action.payload,
                    },
                },
            };
        case "GET_PHIEUNHAP":
            return {
                ...state,
                listPhieuNhap: action.payload,
            };
        case "SET_DISPLAY_DEFAULT":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload.limit,
                    page: action.payload.page.page,
                    tacgia: action.payload.tacgia,
                    nuocsx: action.payload.nuocsx,
                    theloai: action.payload.theloai,
                    star: action.payload.star,
                    link: action.payload.link,
                },
            };
        case "SET_FILTER_SHOW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload,
                },
            };
        case "SET_FILTER_SORT":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sort: action.payload.sort,
                    link: action.payload.link,
                },
            };
        case "SET_FILTER_SORT_REVIEW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sort_review: action.payload,
                },
            };
        case "SET_DEFAULT_REVIEW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload.limit,
                    star: action.payload.star,
                    page: action.payload.page,
                },
            };
        case "FILTER_BY_TACGIA":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    tacgia: action.payload,
                },
            };
        case "FILTER_BY_NUOCSX":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    nuocsx: action.payload,
                },
            };
        case "FILTER_BY_THELOAI":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    theloai: action.payload,
                },
            };
        case "FILTER_BY_RATING":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    star: action.payload,
                },
            };
        case "GET_PAGINATION":
            return {
                ...state,
                pagination: action.payload,
            };
        case "HANDLE_PAGINATE":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    page: action.payload,
                },
            };
        case "GET_DETAIL_SANPHAM":
            return {
                ...state,
                detailSanPham: action.payload,
            };
        case "SET_CART_QUANTITY":
            return {
                ...state,
                totalCart: action.payload,
            };
        default:
            return state;
    }
};

export default sanphamReducer;