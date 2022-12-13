import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  userId:''

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action)
      state.email = action.payload.user.email;
      state.name = action.payload.user.fullName;
      state.userId = action.payload.userId
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
