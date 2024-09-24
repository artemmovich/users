// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   users: [

   ],
};

const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      addUser: (state, action) => {
         state.users.push(action.payload);
      },
      removeUser: (state, action) => {
         state.users.splice(action.payload, 1);
      },
   },
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
