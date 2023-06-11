import { createReducer } from '@reduxjs/toolkit'
import authActions from '../auth/authActions'




const {sign_in, sign_in_token, sign_out} = authActions


const inicialState = {
  address: null,
  products: null,
  loading: false
}

const reducer = createReducer(
  inicialState,
  (builder) => builder
    .addCase(
      sign_in.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          products : action.payload.cart.products,
          address: action.payload.cart.address_id,
          loading: false
        }
        return newState
      }
    )
    .addCase(
      sign_in.pending,
      (state, action) => {
        const newState = {
          ...state,
           loading : true
        }
        return newState
      }
    )
    .addCase(
      sign_in.rejected,
      (state, action) => {
        const newState = {
          ...state,
          loading: false
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          products : action.payload.cart.products,
          address: action.payload.cart.address_id,
          loading: false
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.pending,
      (state, action) => {
        const newState = {
          ...state,
           loading : true
        }
        return newState
      }
    )
    .addCase(
      sign_in_token.rejected,
      (state, action) => {
        const newState = {
          ...state,
          loading: false
        }
        return newState
      }
    )
    .addCase(
      sign_out.fulfilled,
      (state, action) => {
        const newState = {
          ...state,
          address: null,
          products: null
        }
        return newState
      }
    )
    .addCase(
      sign_out.pending,
      (state, action) => {
        const newState = {
          ...state,
          loading: true
        }
        return newState
      }
    )
    .addCase(
      sign_out.rejected,
      (state, action) => {
        const newState = {
          ...state,
          loading: false
        }
        return newState
      }
    )
)
export default reducer
