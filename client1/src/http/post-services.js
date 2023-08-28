import instance from "./settings";

const createPost = (formData) => {
    console.log("postData>>>", formData);
    return instance.post('post/add', formData, {
        headers:{
            'Content-Type' : "multipart/form-data"
        }
    })
}

const getPost = (userId) => {
    return instance.get('post', {
        params:{
            userId: userId
        }
    })
}

const getPostAll =() => {
    return instance.get('post/all')
}

const deletePost = (id) => {
    return instance.delete(`post/delete/${id}`)
}

const updatePost = (id, formData) => {
    console.log("id, formData>>>", id, formData);
    return instance.patch(`post/update/${id}`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    })
}
const getPostById = (id) => {
    return instance.get(`post/${id}`)
}

export const postServices = {
    createPost,
    getPost,
    getPostAll,
    deletePost,
    updatePost,
    getPostById
}