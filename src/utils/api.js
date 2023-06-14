import axios from "axios"

export let apiUrl = 'http://localhost:8000/'

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
  get_products: "products",
  get_discounts: "products/discounts"
}

export const adminEnpoints =  {
  get_products_admin: "products",
  get_orders: "/orders",
  
}

export function headers(token){
  return { headers: { 'Authorization': `Bearer ${token}` } }
}