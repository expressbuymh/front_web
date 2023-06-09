import React from 'react'
import { Routes as Router, Route } from "react-router-dom"

// routes
import MainLayout from '../layouts/MainLayout'
import { Home } from '../pages/Home'
//auth
import { Verify } from '../pages/auth/Verify'
import { SignIn } from '../pages/auth/SignIn'
import { SignUp } from '../pages/auth/SignUp'
//products
import { Products } from '../pages/products/Products'
import { ProductDetails } from '../pages/products/ProductDetails'
//checkout
import { CartDetails } from '../pages/checkout/CartDetails'
import { Checkout } from '../pages/checkout/Checkout'
import { Payment } from '../pages/checkout/Payment'
//user/profile
import { Profile } from '../pages/user/Profile'
//user/orders
import { Orders } from '../pages/user/Orders'
import { OrderDetails } from '../pages/user/OrderDetails'
//user/address
import { Addresses } from '../pages/user/Adresses'
import { CreateAddress } from '../pages/user/addresses/CreateAddress'
import { ModifyAddress } from '../pages/user/addresses/ModifyAddress'
import { DeleteAddress } from '../pages/user/addresses/DeleteAddress'


export function Routes() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout >
        } />
      <Route
        path="/auth/login"
        element={
          <SignIn />
        } />
      <Route
        path="/auth/register"
        element={
          <SignUp />
        } />
      <Route
        path="/auth/verify"
        element={
          <Verify />
        } />
      <Route
        path='/products'
        element={
          <MainLayout>
            <Products />
          </MainLayout>
        }
      />
      <Route
        path='/products/details/:product_id'
        element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        }
      />
      <Route
        path='/checkout/details'
        element={
          <MainLayout>
            <CartDetails />
          </MainLayout>
        }
      />
      <Route
        path='/checkout/form'
        element={
          <MainLayout>
            <Checkout />
          </MainLayout>
        }
      />
      <Route
        path='/checkout/payment'
        element={
          <MainLayout>
            <Payment />
          </MainLayout>
        }
      />
      <Route
        path='/user/profile'
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />
      <Route
        path='/user/orders'
        element={
          <MainLayout>
            <Orders />
          </MainLayout>
        }
      />
      <Route
        path='/user/orders/details/:order_id'
        element={
          <MainLayout>
            <OrderDetails />
          </MainLayout>
        }
      />
      <Route
        path='/user/profile/adresses'
        element={
          <MainLayout>
            <Addresses />
          </MainLayout>
        }
      >
        <Route path='create' element={<CreateAddress/>}/>
        <Route path='modify/:address_id' element={<ModifyAddress/>}/>
        <Route path='delete/:address_id' element={<DeleteAddress/>}/>
      </Route>
    </Router>
  )
}


/* const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home/> },
      { path: '/Login', element: <SignIn /> },
      { path: '/Register', element: <SignUp /> }
      
      { path: '/chapter-form/:id_manga', element: <ChaptersForm /> },
      { path: '/mangas-form', element: <Mangaform /> },
      { path: '/chapters/:id/:page', element: <PageChapters /> },
      { path: '/mangas/:page', element: <MangasCreate /> },
      { path: '/mangas/manga/:id', element: <Manga /> },
      { path: '/mymangas', element: <FavMangas /> },
      { path: '/admin', element: <AdminPanel /> },
      { path: '/new-author', element: <NewAuthor /> },
      { path: '/new-company', element: <NewCompany /> }
    ]
  }
])
 */