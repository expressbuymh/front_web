import { createReducer } from '@reduxjs/toolkit'
import actions from './authActions'


const { sign_in, sign_in_token, sign_out, sign_up } = actions


const inicialState = {
  loading: null,
  user: null,
  token: null,
  error: null,
  success: null,
}

const reducer = createReducer(
  inicialState,
  (builder) => builder
    .addCase(
      sign_in.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          success: true,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_in.pending,
      (state, action) => {
        const newState = {
          ...state,
          loading: true
        }
        return newState
      }
    )
    .addCase(
      sign_in.rejected,
      (state, action) => {
        const newState = {
          ...state,
          success: false,
          loading: false,
          error: action.payload.error
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          success: true,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.pending,
      (state, action) => {
        const newState = {
          ...state,
          loading: true
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.rejected,

      (state, action) => {
        const newState = {
          ...state,
          success: false,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_out.fulfilled,

      (state, action) => {
        const newState = {
          ...state,
          loading: null,
          user: null,
          token: null,
          error: null,
          success: null,
        }
        return newState
      }
    )
    .addCase(
      sign_out.pending,

      (state, action) => {
        const newState = {
          ...state,
          loading: true,
        }
        return newState
      }
    )
    .addCase(
      sign_out.rejected,
      (state, action) => {
        const newState = {
          ...state,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_up.fulfilled,

      (state, action) => {
        const newState = {
          ...state,
          succes: true,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_up.pending,

      (state, action) => {
        const newState = {
          ...state,
          loading: false,
        }
        return newState
      }
    )
    .addCase(
      sign_up.rejected,
      (state, action) => {
        const newState = {
          ...state,
          error: action.payload.error,
          loading: false,
        }
        return newState
      }
    )

)
export default reducer
