import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
});
export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await fetch(`${BASE_URL}products`);
            const data = await response.json();
            dispatch(setProduct(data.slice(0, 30)));
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}