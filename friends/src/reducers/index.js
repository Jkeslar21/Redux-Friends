import { FETCHING, SUCCESS, FAILURE } from '../actions'

const initialState = {
    friends: [],
    isFetching: false,
    // error: null
    error: ''
};

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCHING:
      return {
        ...state,
        isFetching: true,
        err: ''
      }
      case SUCCESS:
        return {
          ...state,
          isFetching: false,
          friends: action.payload,
          err: ''
        }
      case FAILURE:
        return {
          ...state,
          isFetching: false,
          err: action.payload
        }
        default:
            return state;
    }
}

export default reducer;