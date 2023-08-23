import * as request from "../utils/request";

export const getListNhanVien = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.nhanvien;
    } catch (error) {
        console.log(error);
    }
}; 
export const storeNhanVien = async (endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateNhanVien = async (endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
