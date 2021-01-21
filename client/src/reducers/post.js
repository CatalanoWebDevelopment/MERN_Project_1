/* eslint-disable import/no-anonymous-default-export */
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELTE_POST
} from '../actions/types';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case DELTE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            };
        case POST_ERROR: 
            return {
                ...state,
                loading: false
            };
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.postId ? { ...post, likes: payload.likes } : post),
                loading: false
            }
        default:
            return state;
    }
}