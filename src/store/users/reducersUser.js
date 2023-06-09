import { createReducer } from '@reduxjs/toolkit'
import actions from './actionsUser'

const { token, logout, signin, signup } = actions

const inicialState = {
  user: null,
  token: null
}

const reducer = createReducer(
  inicialState,
  (builder) => builder
    .addCase(
      token.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user,
          token: action.payload.token
        }
        return newState
      }
    )
    .addCase(
      logout.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user,
          token: action.payload.token
        }
        return newState
      }
    )
    .addCase(
      signin.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user,
          token: action.payload.token
        }
        return newState
      }
    ).addCase(
      signup.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user
        }
        return newState
      }
    )
)
export default reducer
