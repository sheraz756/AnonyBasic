import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth:false,
  user:null,
  otp:{
    phone:'',
    hash:''
  }
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth:(state,actions)=>{
      const {hash} = actions.payload
      state.otp.hash = hash
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = AuthSlice.actions

export default AuthSlice.reducer