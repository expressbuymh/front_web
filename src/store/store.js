import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './user/rootReducer'

const store = configureStore({

  reducer: {
    user
  }
})

export default store
