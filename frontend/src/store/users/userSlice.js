import { createSlice } from "@reduxjs/toolkit"


/* initialize value */
const userToken = localStorage.getItem('accessToken') ?
localStorage.getItem('accessToken') : null;


const initialState = {
    loading: false,
    error: null,
    success: false,
    userInfo: null,
    userToken
}                    

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("userToken")
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        }
    },
    extraReducers: {

    }
})


export const {logout} = userSlice.actions

export default userSlice.reducer