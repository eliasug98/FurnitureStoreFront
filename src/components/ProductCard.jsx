import React, { useState, useEffect } from 'react';
import useFurniture from '../hooks/useFurniture';
import { formatearDinero } from '../helpers';

export default function ProductCard({ product }) {
    const { image, price, name, description } = product; 
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false); // Estado para el tooltip
    const { handleClickModal, handleSetProducto, obtenerValorDolar } = useFurniture();
    
    const [currentPrice, setCurrentPrice] = useState(price); 
    const [dolarValue, setDolarValue] = useState(1); 

    useEffect(() => {
        const fetchDolarValue = async () => {
            const dolar = await obtenerValorDolar();
            if (dolar && dolar.venta) {
                setDolarValue(dolar.venta);
            }
        };

        fetchDolarValue();
    }, [obtenerValorDolar]);

    const currencyExchange = () => {
        if (currentPrice === price) {
            const convertedPrice = (price / dolarValue).toFixed(2);
            setCurrentPrice(Number(convertedPrice));
        } else {
            setCurrentPrice(price);
        }
    };

    return (
        <div 
            className={`max-w-sm mx-auto m-2 bg-white rounded-lg shadow-md transition-transform transform hover:shadow-lg p-4 w-64 
            border border-gray-300 outline outline-transparent duration-300 ${isHovered ? 'hover:outline-2 hover:outline-gray-700' : ''}`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={`${image}`} alt={`${name}`} className="w-full h-48 object-cover rounded-lg mt-2" />
            <h2 className={`text-xl font-semibold mt-2 ${isHovered ? 'text-amber-700' : 'text-gray-800'}`}>{name}</h2>
            <h2 className="text-xs text-gray-800 mt-2">{description}</h2>

            <div className="flex mt-2 justify-between items-center">
                <div className='flex items-center gap-1'>
                    <p className="text-lg text-gray-700 mt-1 font-bold">{formatearDinero(currentPrice)}</p>
                    <button 
                        className='w-8 h-8 mt-1' 
                        onMouseEnter={() => setTooltipVisible(true)} // Mostrar tooltip
                        onMouseLeave={() => setTooltipVisible(false)} // Ocultar tooltip
                        onClick={currencyExchange}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#48752C">
                            <path d="M480-48q-113 0-207.5-52.5T120-241v121H48v-240h240v72H175q48 76 128 122t177 46q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h72q0 90-34 168.5t-92.5 137Q727-116 648.5-82T480-48Zm-33-168v-48q-21-5-58.5-27T333-376l63-26q2 6 20 42.5t70 36.5q26 0 50.5-14.5T561-384q0-27-20.5-43.5T475-460q-31-11-78.5-35.5T349-585q0-3 13-49t86-62v-48h66v47q53 9 74.5 40t25.5 44l-59 25q-3-10-19-30t-53-20q-20 0-44 11.5T415-586q0 27 24.5 41t75.5 31q67 23 89.5 56.5T627-384q0 37-15 60t-34.5 36.5Q558-274 539.5-269t-26.5 6v47h-66ZM48-480q0-90 34-168.5t92.5-137Q233-844 311.5-878T480-912q113 0 207.5 52.5T840-719v-121h72v240H672v-72h113q-48-76-128-122t-177-46q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H48Z"/>
                        </svg>
                    </button>
                    {tooltipVisible && (
                        <span className="absolute bg-gray-400 text-white text-xs rounded px-2 py-1 -mt-[40px]">
                            change currency type
                        </span>
                    )}
                </div>
                <button
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(product);
                    }}                
                >
                    {isHovered ? (
                        <img className={`w-20 transition-transform duration-300 ${isHovered ? 'transform scale-110' : ''} rounded`} src="https://iili.io/dpUmd3x.png" alt="" />
                    ) : (
                        <img className={`w-20 transition-transform duration=300 ${isHovered ? 'transform scale=110' : ''} rounded`} src="https://iili.io/dpUmd3x.png" alt="" />
                    )}
                </button>
            </div>
        </div>
    );
}