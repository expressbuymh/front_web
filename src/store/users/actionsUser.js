/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiUrl from '../../utils/api'

const token = createAsyncThunk(
  'token',
  async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { headers: { Authorization: `Bearer ${token}` } }
      const res = await axios.post(apiUrl + 'auth/token', {}, headers)

      return {
        user: res.data.user,
        token: res.data.token
      }
    } catch (error) {

    }
  }
)
const logout = createAsyncThunk(
  'logout',
  async () => {
    try {
      const token = localStorage.getItem('token')
      const headers = { headers: { Authorization: `Bearer ${token}` } }
      await axios.post(apiUrl + 'auth/signout', null, headers)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {
        user: null,
        token: null
      }
    } catch (error) {

    }
  }
)

const signin = createAsyncThunk(
  'signin',
  async (data) => {
    try {
      const url = apiUrl + 'auth/signin'
      const response = await axios.post(url, data)
      console.log(response)
      localStorage.setItem('token', JSON.stringify(response.data.token))
      return {
        user: response.data.user,
        token: response.data.token
      }
    } catch (error) {
      console.log(error)
    }
  }
)

const signup = createAsyncThunk(
  'signup',
  async (data) => {
    try {

      const res = await axios.post('http://localhost:8000/auth/signup', data)
    
      return {
        user: res.data.user
      }
    } catch (error) {

    }
  }
)

const actions = { token, logout, signin, signup }

export default actions
