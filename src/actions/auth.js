import * as api from "../api";

import { AUTH } from "../constants/actionTypes";

export const auth = (token) => async (dispatch) => {
    try {
        const { data } = await api.authUser(token);

        dispatch({ type: AUTH, data: { data, token } });
    } catch (error) {
        console.log(error);
    }
};