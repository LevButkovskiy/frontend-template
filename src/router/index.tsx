import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import { Home } from '../pages/Home'
import { About } from '../pages/About'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
])
