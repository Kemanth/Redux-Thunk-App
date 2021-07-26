import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds = _.map(getState().posts, 'userId');
        const uniqueids = _.uniq(userIds);
        uniqueids.forEach((user)=>{
            dispatch(fetchUser(user));
        });
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type : 'FETCH_POSTS', payload : response.data})
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type : 'FETCH_USER', payload : response.data});
    }
}