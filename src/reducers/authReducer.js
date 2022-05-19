import {sign_in, sign_out} from '../actions/types';

const initial_state = {
    isSignedIn: null,
    userId: null
};

export default (state= initial_state, action) => {
    switch(action.type) {
        case sign_in:
            return {...state, isSignedIn: true, userId:action.payload};
        case sign_out:
            return {...state, isSignedIn: false, userId:null};
        default:
            return state;
    }
};