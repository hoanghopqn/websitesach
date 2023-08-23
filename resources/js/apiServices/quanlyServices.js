import * as request from "../utils/request";

export const get = async(endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const store = async(endpoint, options) => {
    try {
        const res = await request.post(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const update = async(endpoint, options) => {
    try {
        const res = await request.put(endpoint, options);
        return res;
    } catch (error) {
        console.log(error);
    }
};