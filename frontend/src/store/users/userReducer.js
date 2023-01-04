import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL } from "../../settings/constant"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

/* register */
export const userRegister = createAsyncThunk(
    'user/register',
    async ({ fistname, lastname, gender, telephone, isSuccess },
        { rejectWithValue }) => {
        try {
            await axios.post(`${API_URL}register`, {
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                telephone: telephone
            }, config)
                .then((response) => {
                    response.data === "ok" ? isSuccess(true) :
                        msg.innerText = "Erreur ! cet email est déjà utilisée par un autre compte."
                })
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

/* login */
export const userLogin = createAsyncThunk(
    'user/login',
    async ({email,passwd,msg},
        {rejectWithValue}) => {
            try {
                const { data } = await axios.post(`${API_URL}login`, {
                    email: email,
                    passwd: passwd
                }, config )
                
                if (data.userToken) {
                    msg.innerText = ""
                    localStorage.setItem('userToken', data.userToken)
                    localStorage.setItem('userId', data.userToken)
                } else {
                    msg.innerText = "identifant incorrecte";
                }

                return data;
            } catch (error) {
                return rejectWithValue(error)
            }
        }
)