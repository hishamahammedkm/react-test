import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
    isLoggedIn: true,
    user: {},
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk(
    'auth/fetchUsers',
    async () => {
        try {
            console.log('dataaaaaa');
            const response =await axios.get('http://training.pixbit.in/users.php/',
          
              
            )
            
            // const response = await fetch('http://training.pixbit.in/users.php/',{
            //     // method: 'GET', // or 'PUT'
            //     mode: 'no-cors', // no-cors, *cors, same-origin
            //     headers: {
            //       'Content-Type': 'application/x-www-form-urlencoded',
            //     }})
            const data = await response.json();
            console.log('dataaaaaa', data);
            return data.data;
        } catch (error) {
            throw Error(error);
        }
    }
);


export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (email, password, name, phone) => {
        try {
            const response = await axios.post('http://training.pixbit.in/register.php', { email, password, name, phone });
            const data = await response.json();
            return data.data;
        } catch (error) {
            throw Error(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (email, password) => {
        try {
            const response = await axios.post('http://training.pixbit.in/login.php', { email, password });
            const data = await response.json();
            return data.data;

        } catch (error) {
            throw Error(error);
        }
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state, action) {
            state.isLoggedIn = false;
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;


