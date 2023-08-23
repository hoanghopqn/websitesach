import * as request from "../utils/request";

export const getListCTGG = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
}; 
export const storeCTGG = async (endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const updateCTGG = async (endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
