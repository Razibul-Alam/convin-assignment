import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk} from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetchById',
  async () => {
    const response = await fetch(`https://reqres.in/api/users`)
    .then(res=>res.json())
    
    console.log(response)
    return response
  }
)

export const UsersSlice = createSlice({
  name: 'users',
  initialState:{
    allUsers:[],
    },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      console.log(state)
      state.allUsers=payload.data
    })
  },
})

// Action creators are generated for each case reducer function
export const {addFavorites,removeFavorite,addHired,removeHire} = UsersSlice.actions

export default UsersSlice.reducer