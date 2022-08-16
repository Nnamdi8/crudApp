import * as api from '../api/index';

export const createPost = (post) => async (dispatch) => {
    const {data} = await api.createPost(post);
    dispatch ({type: 'POST', payload: data});
}


export const getPost = () => async (dispatch) => {
    const {data} = await api.getPost();
    dispatch({type: 'GET', payload: data})
}

export const updatePost = (id,post) => async (dispatch) => {
    const { data } = await api.updatePost(id,post);
    dispatch({ type: 'UPDATE', payload: id})
}


export const deletePost = (id) => async (dispatch) => {
    const { data } = await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: data });
}