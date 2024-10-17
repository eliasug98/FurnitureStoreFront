import React, { useState } from 'react';
import SaleIcon from './SaleIcon';
import { Link } from 'react-router-dom';

export default function FeaturedProducts({ imagen, precio, nombre, rate, url }) {
    const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover del SVG

    return (
        <div className="max-w-sm mx-auto m-2 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg p-4 w-64">
            {/* Icono */}
            <SaleIcon />

            {/* Imagen del producto */}
            <img src={`${imagen}`} alt={`${nombre}`} className="w-full h-48 object-cover rounded-lg mt-2" />

            {/* Título del producto */}
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{nombre}</h2>

            {/* Precio del producto */}
            <p className="text-lg text-gray-700 mt-1 font-bold">{precio}</p>

            {/* Iconos adicionales */}
            <div className="flex mt-2 justify-between items-center">
                <div className='flex'>
                    {/* Mostrar estrellas completas */}
                    {Array.from({ length: rate }).map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 576 512">
                            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13C270 . . . z" />
                        </svg>
                    ))}
                    {/* Mostrar estrellas incompletas */}
                    {Array.from({ length: (5 - rate) }).map((_, index) => (
                        <svg key={index + rate} width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                        </svg>
                    ))}
                </div>
                <Link 
                    to={url}
                    onMouseEnter={() => setIsHovered(true)} // Cambia el estado a true al hacer hover sobre el SVG
                    onMouseLeave={() => setIsHovered(false)} // Cambia el estado a false al salir del hover
                >
                    {/* SVG que cambia al hacer hover */}
                    {isHovered ? (
                        <svg width="50px" height="24px" className="svg-moreIcon">
                            <circle cx="12" cy="12" r="2" stroke="black" strokeWidth="2" fill="none"></circle>
                            <circle cx="20" cy="12" r="2" stroke="black" strokeWidth="2" fill="none"></circle>
                            <circle cx="28" cy="12" r="2" stroke="black" strokeWidth="2" fill="none"></circle>
                        </svg>
                    ) : (
                        <svg width="50px" height="24px" className="svg-moreIcon">
                            <circle cx="12" cy="12" r="2"></circle>
                            <circle cx="20" cy="12" r="2"></circle>
                            <circle cx="28" cy="12" r="2"></circle>
                        </svg>
                    )}
                </Link>
            </div>
        </div>
    );
}