import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import useFurniture from '../hooks/useFurniture';

const Navbar = () => {

  const { user, logout } = useAuth({
    middleware: 'guest'
  });
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  console.log('URL actual:', location.pathname);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="flex flex-col items-center p-4 text-white">
      <div className="flex justify-between items-center w-full">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src='https://iili.io/dpHOeZG.png' alt='imagen logotipo' className="max-w-32" />
        </div>

        {/* Enlaces de navegación en pantallas normales */}
        <div className="hidden md:flex md:space-x-10 mx-4">
          <Link to="/" className={`${location.pathname === "/" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
            HOME
          </Link>
          <Link to="/shop" className={`${location.pathname === "/shop" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
            SHOP
          </Link>
          <Link to="/blog" className={`${location.pathname === "/blog" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
            BLOG
          </Link>
          <Link to="/contact" className={`${location.pathname === "/contact" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
            CONTACT
          </Link>
          <Link to="/about" className={`${location.pathname === "/about" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
            ABOUT US
          </Link>
        </div>

        {/* Botón de menú hamburguesa visible solo en pantallas pequeñas */}
        <button onClick={handleToggle} className="md:hidden text-white focus:outline-none mx-2">
          {/* Icono del menú hamburguesa */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>


        {/* Botones de Cerrar Sesión o Iniciar Sesión */}
        <div>
          {user && user.email ? ( // Verifica si hay un usuario autenticado
            <button onClick={logout} className='text-red-600 hover:text-red-800'>
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className='text-blue-600 hover:text-blue-800'>
              Login
            </Link>
          )}
        </div>

      </div>

      {/* Enlaces de navegación debajo en pantallas pequeñas */}
      <div className={`flex ${isOpen ? 'flex-row' : 'hidden'} md:hidden mt-2`}>
        <Link to="/" className={`${location.pathname === "/" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
          HOME
        </Link>
        <Link to="/shop" className={`${location.pathname === "/shop" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
          SHOP
        </Link>
        <Link to="/blog" className={`${location.pathname === "/blog" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
          BLOG
        </Link>
        <Link to="/contact" className={`${location.pathname === "/contact" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
          CONTACT
        </Link>
        <Link to="/about" className={`${location.pathname === "/about" ? "text-white bg-amber-600 p-2 rounded" : "text-black text-opacity-50 border-b-2 border-transparent hover:text-opacity-100 p-2 hover:border-amber-600"}`}>
          ABOUT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;