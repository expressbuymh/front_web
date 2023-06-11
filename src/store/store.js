import { configureStore } from '@reduxjs/toolkit'
import user from './users/reducersUser'

const store = configureStore({

  reducer: {
    user

  }
})

export default store
