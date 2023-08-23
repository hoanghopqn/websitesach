import * as request from "../utils/request";

export const getListGG = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.giamgia;
    } catch (error) {
        console.log(error);
    }
}; 
export const storeGG = async (endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateGG = async (endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res.giamgia;
    } catch (error) {
        console.log(error);
    }
};
