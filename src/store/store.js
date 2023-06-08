import { configureStore } from '@reduxjs/toolkit'
import reducerUser from './users/reducersUser'

const store = configureStore({

  reducer: {
    reducerUser

  }
})

export default store
