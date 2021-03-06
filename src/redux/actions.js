import {
  GET_BUSINESSES,
  DELETE_BUSINESS,
  ADD_BUSINESS,
  UPDATE_BUSINESS,
  GET_SINGLE_BUSINESS,
  FILTER_BUSINESSES,
} from "./action-type";
import axios from "axios";

const baseUrl = "http://localhost:5000/business"; //I wanted to fetch it from .env, but I was facing problem

export const getBusinesses = (businesses) => {
  return {
    type: GET_BUSINESSES,
    payload: businesses,
  };
};

const businessDeleted = () => {
  return {
    type: DELETE_BUSINESS,
  };
};

const businessAdded = () => {
  return {
    type: ADD_BUSINESS,
  };
};

export const getSingleBusiness = (business) => {
  return {
    type: GET_SINGLE_BUSINESS,
    payload: business,
  };
};

const businessUpdated = () => {
  return {
    type: UPDATE_BUSINESS,
  };
};

// const sortedBusinesses = (businesses, sorting) => {
//   return {
//     type: FILTER_BUSINESSES,
//     payload: {
//       sorting: sorting,
//       items:
//         sorting === ""
//           ? businesses
//           : businesses.filter((a) => a.sorting.indexOf(sorting.toUpperCase())),
//     },
//   };
// };

export const loadBusinesses = () => {
  return function (dispatch) {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        console.log("response", response);
        dispatch(getBusinesses(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteBusiness = (id) => {
  return function (dispatch) {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) => {
        console.log("response", response);
        dispatch(businessDeleted());
        dispatch(loadBusinesses());
      })
      .catch((error) => console.log(error));
  };
};

export const addBusiness = (business) => {
  return function (dispatch) {
    axios
      .post(`${baseUrl}`, business)
      .then((response) => {
        console.log("response", response);
        dispatch(businessAdded());
        dispatch(loadBusinesses());
      })
      .catch((error) => console.log(error));
  };
};

export const getBusiness = (id) => {
  return function (dispatch) {
    axios
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        console.log("response", response);
        dispatch(getSingleBusiness(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateBusiness = (business, id) => {
  return function (dispatch) {
    axios
      .put(`${baseUrl}/${id}`, business)
      .then((response) => {
        console.log("response", response);
        dispatch(businessUpdated());
        dispatch(loadBusinesses());
      })
      .catch((error) => console.log(error));
  };
};

// export const filterBusinesses = () => {
//   return function (dispatch) {
//     axios
//       .get(`${baseUrl}/business`)
//       .then((response) => {
//         console.log("response", response);
//         dispatch(sortedBusinesses());
//         dispatch(loadBusinesses());
//       })
//       .catch((error) => console.log(error));
//   };
// };
