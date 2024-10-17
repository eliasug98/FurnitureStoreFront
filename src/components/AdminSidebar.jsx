import {Link} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AdminSidebar() {

    const { logout } = useAuth({middleware: 'auth'});

    return (
        <aside className="md:w-72 h-screen">
            <div className="p-4">
                <img 
                    src="https://iili.io/dpHO8G4.jpg"
                    alt="imagen logotipo"
                    className="w-40"
                />
            </div>

            <nav className='flex flex-col p-4'>
                <Link to="/admin" className='font-bold text-lg p-2 hover:text-slate-600'>Orders</Link>
                <Link to="/admin/products" className='font-bold text-lg p-2 hover:text-slate-600'>Products</Link>
                <Link to="/admin/users" className='font-bold text-lg p-2 hover:text-slate-600'>Users</Link>
                <Link to="/admin/category" className='font-bold text-lg p-2 hover:text-slate-600'>Category</Link>
                <Link to="/admin/messages" className='font-bold text-lg p-2 hover:text-slate-600'>Messages</Link>
            </nav>

            <div className='my-5 px-5'>
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </aside>
    )
}
