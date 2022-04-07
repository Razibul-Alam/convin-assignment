import { configureStore } from '@reduxjs/toolkit'
import usersReducer from'../Redux-Features/UsersSlice'

export default configureStore({
  reducer: {
    users:usersReducer,
  },
})