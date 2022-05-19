import {
    sign_in, 
    sign_out, 
    create_stream, 
    delete_stream, 
    edit_stream,
    fetch_stream,
    fetch_streams
} from './types';
import history from '../history';
import streams from '../apis/streams';

export const signIn = (userId) => {
    return (
        {
            type: sign_in,
            payload: userId
        }
    );
};

export const signOut = () => {
    return (
        {
            type: sign_out
        }
    );
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams',{...formValues,userId});

    dispatch({type: create_stream, payload: response.data});
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: fetch_streams, payload: response.data});
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    console.log(response)
    dispatch({ type: fetch_stream, payload: response.data});
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: edit_stream, payload: response.data});
    history.push('/');
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: delete_stream, payload: id});
    history.push('/');
}