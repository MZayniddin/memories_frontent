import * as api from "../api";

import { AUTH } from "../constants/actionTypes";

export const auth = (token) => async (dispatch) => {
    try {
        const { data } = await api.authUser(token);

        dispatch({ type: AUTH, data: { result: data, token } });
    } catch (error) {
        console.log(error);
    }
};

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
