import {GET_POST_DATA, GET_ALL_PRODUCT} from "../types"

export const getPostAction = (data) => {
    return{
        type:GET_POST_DATA,
        payload:data
    }
}

export const getAllProduct = (data) => {
    return {
        type:GET_ALL_PRODUCT,
        payload:data
    }
}