import * as request from "../utils/request";

export const getListKhachHang = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.khachhang;
    } catch (error) {
        console.log(error);
    }
}; 
export const storeKhachHang = async (endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateKhachHang = async (endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
