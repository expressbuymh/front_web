import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// routes
import Main from '../layouts/MainLayout'
import App from '../App'
import Login from '../pages/Signin'
import Register from '../pages/Signup'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <App /> },
      { path: '/Login', element: <Login /> },
      { path: '/Register', element: <Register /> }
      /*
      { path: '/chapter-form/:id_manga', element: <ChaptersForm /> },
      { path: '/mangas-form', element: <Mangaform /> },
      { path: '/chapters/:id/:page', element: <PageChapters /> },
      { path: '/mangas/:page', element: <MangasCreate /> },
      { path: '/mangas/manga/:id', element: <Manga /> },
      { path: '/mymangas', element: <FavMangas /> },
      { path: '/admin', element: <AdminPanel /> },
      { path: '/new-author', element: <NewAuthor /> },
      { path: '/new-company', element: <NewCompany /> } */
    ]
  }
])
export default routes
