import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, cart_endpoint, headers } from "../../../utils/api";
import { LS } from "../../../utils/localStorageUtils";

//addproduct
const set_product = createAsyncThunk("set_product", async ({ product, minus, cart_id }, { rejectWithValue }) => {
    {
        try {
            if (minus) {
                product.quantity = product.quantity - 1
            } else {
                product.quantity = product.quantity + 1
            }
            let response = await api.post(cart_endpoint.set_product + cart_id, product, headers(LS.get("token")))
            return {
                product_id: product.product_id,
                quantity: product.quantity
            }
        } catch (error) {
            return rejectWithValue({
                error
            })
        }

    }
    //product_id
    //quantity
})
//remove product
const remove_product = createAsyncThunk("remove_product", async ({ product, cart_id }, { rejectWithValue }) => {
    {
        
        try {
            product = {
                product_id: product.product_id
            }
            console.log(product)
            let response = await api.post(cart_endpoint.remove_product + cart_id, product, headers(LS.get("token")))
            console.log(response.data)
            return {
                product_id: product.product_id
            }
        } catch (error) {
            console.log(error)
            return rejectWithValue({
                error
            })
        }

    }
    //product_id
    //quantity
})
//clear
const clear_cart = createAsyncThunk("clear_product", async ({  cart_id }, { rejectWithValue }) => {
    {
        
        try {
            let response = await api.put(cart_endpoint.clear_cart + cart_id, null,headers(LS.get("token")))
            console.log(response.data)
            return {
                success: true
            }
        } catch (error) {
            console.log(error)
            return rejectWithValue({
                error
            })
        }

    }
    //product_id
    //quantity
})
//checkout

const actions = { set_product, remove_product, clear_cart }
export default actions