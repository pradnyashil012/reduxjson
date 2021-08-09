import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  FILTER_BUSINESSES,
  GET_BUSINESSES,
  GET_SINGLE_BUSINESS,
  UPDATE_BUSINESS,
} from "./action-type";

const initialState = {
  businesses: [],
  business: {},
  // sorting: [],
  loading: false,
};

const businessReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
        loading: false,
      };

    case DELETE_BUSINESS:
      return {
        ...state,
        loading: false,
      };

    case ADD_BUSINESS:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_BUSINESS:
      return {
        ...state,
        loading: false,
      };

    case GET_SINGLE_BUSINESS:
      return {
        ...state,
        business: action.payload,
        loading: false,
      };

    // case FILTER_BUSINESSES:
    //   return {
    //     ...state,
    //     business: action.payload,
    //     sorting: action.payload.sorting,
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default businessReducers;
