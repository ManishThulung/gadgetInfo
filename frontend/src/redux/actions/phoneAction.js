import * as api from "../../api/index";
import axios from "axios";

import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_FAIL,
  FETCH_PHONE,
  CREATE_PHONE_REQUEST,
  CREATE_PHONE_SUCCESS,
  CREATE_PHONE_FAIL,
  DELETE_PHONE_REQUEST,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_FAIL,
  UPDATE_PHONE_REQUEST,
  UPDATE_PHONE_SUCCESS,
  UPDATE_PHONE_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/constants";
// fetching all the phones
export const getPhones =
  (keyword = "", price = [10000, 200000]) =>
  async (dispatch) => {
    try {
      // let link = `http://127.0.0.1:8000/api/phones?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

      let link = `https://gadgetinfo-mern-stack.herokuapp.com/api/phones?keyword=${keyword}`;
      // let link = `http://127.0.0.1:8000/api/phones?keyword=${keyword}`;

      const { data } = await axios.get(link);

      dispatch({
        type: FETCH_ALL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//create new phone
export const createPhone = (phoneData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PHONE_REQUEST });

    const { data } = await api.newPhone(phoneData);

    dispatch({
      type: CREATE_PHONE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PHONE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all products for admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await api.adminProduct();

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.phones,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// single phone details
export const getSinglePhone = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPhone(id);
    dispatch({
      type: FETCH_PHONE,
      payload: data.phone,
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// export const getSinglePhone = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: PHONE_DETAILS_REQUEST });
//     const { data } = await api.fetchPhone(id);
//     dispatch({
//       type: PHONE_DETAILS_SUCCESS,
//       payload: data,
//       // payload: data.phone,
//     });
//   } catch (error) {
//     dispatch({
//       type: PHONE_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// update phone
export const updatePhone = (id, phoneData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PHONE_REQUEST });

    const { data } = await api.updatephone(id, phoneData);

    dispatch({
      type: UPDATE_PHONE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PHONE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete phone
export const deletePhone = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PHONE_REQUEST });

    const { data } = await api.deleteItem(id);

    dispatch({
      type: DELETE_PHONE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PHONE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
