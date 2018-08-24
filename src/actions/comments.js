import {
    FETCH_COMMENTS
} from '../types';
import api from '../api';

export const fetchComments = url => dispatch => {
    api.comments.getAll(url)
        .then(comments =>
            dispatch({
                type: FETCH_COMMENTS,
                payload: comments
            })
        );
};
