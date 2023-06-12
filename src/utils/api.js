import axios from "axios"

let apiUrl = 'http://localhost:8000/'

if (process.env.NODE_ENV === 'production') {
  apiUrl = import.meta.env.VITE_API
}

export const api = axios.create({baseURL: 'http://localhost:8000/'})

export const endpoints = {
  sign_in: "/auth/signin",
  sign_up: "/auth/signup",
  sign_out: "/auth/signout",
  sign_in_token: "auth/token",
  get_menu: "menu",
  get_products: "products"
}

const adminEnpoints =  {
  get_products: "",
  get_orders: "",
  
}

export function headers(token){
  return { headers: { 'Authorization': `Bearer ${token}` } }
}