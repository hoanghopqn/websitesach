import * as request from "../utils/request";

export const getListDSTK = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.dstaikhoan;
    } catch (error) {
        console.log(error);
    }
}; 
export const storeDSTK = async (endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateDSTK = async (endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
