import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Orders from './views/Orders'
import Products from './views/Products'
import Registro from './views/Registro'
import Shop from './views/Shop'
import Blog from './views/Blog'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import Contact from './views/Contact'
import About from './views/About'
import MyAccount from './views/MyAccount'
import Users from './views/Users'
import Category from './views/Category'
import AdminMessages from './views/AdminMessages'
import UserMessages from './views/UserMessages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'checkout',
                element: <Checkout />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'profile',
                element: <MyAccount />
            },
            {
                path: 'messages',
                element: <UserMessages />
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Orders />
            },
            {
                path: '/admin/products',
                element: <Products />
            },
            {
                path: '/admin/users',
                element: <Users />
            },
            {
                path: '/admin/category',
                element: <Category />
            },
            {
                path: '/admin/messages',
                element: <AdminMessages />
            }
        ]
    }
])

export default router