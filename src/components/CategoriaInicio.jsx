import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriaInicio({ nombre, imagen, url }) {
    
    return (
        <Link to={url} className="relative m-1 flex flex-col items-center justify-center w-1/3 h-[200px] overflow-hidden transition duration-300 transform hover:scale-95">
            <img src={`${imagen}`} alt={nombre} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <h2 className="absolute text-white text-2xl font-bold z-10 text-center">
                {nombre}
            </h2>
        </Link>
    )
}
