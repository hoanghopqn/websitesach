import * as request from "../utils/request";

export const getListSanPham = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getAllName = async (endpoint) => {
    try {
        const res = await request.get(endpoint);
        return res;
    } catch (error) {
        console.log(error);
    }
};