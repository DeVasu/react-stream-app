import _ from 'lodash';
import {
    create_stream, 
    delete_stream, 
    edit_stream,
    fetch_stream,
    fetch_streams
} from '../actions/types';

export default (state={},action) => {
    switch( action.type ) {
        case fetch_streams:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case fetch_stream:
            return {...state, [action.payload.id]:action.payload};
        case create_stream:
            return {...state, [action.payload.id]:action.payload};
        case edit_stream:
            return {...state, [action.payload.id]:action.payload};
        case delete_stream:
            return _.omit(state, action.payload);
        
        default:
            return state;
    }
}
