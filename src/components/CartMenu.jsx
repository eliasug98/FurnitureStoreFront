import React from 'react';
import useFurniture from '../hooks/useFurniture';
import { formatearDinero } from '../helpers';
import { Link } from 'react-router-dom';

const CartMenu = () => {
    const { pedido, total, handleEliminarProductoPedido } = useFurniture();

    const comprobarPedido = () => pedido.length === 0;

    return (
        <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-lg">
            {comprobarPedido() ? (
                <div>
                    <p className="text-center p-4 text-gray-500">
                        No products in cart.
                    </p>
                </div>
            ) : (
                <>
                    <table className="min-w-[200px] border-separate border-spacing-y-[0]">
                        <thead>
                            <tr>
                                <th className="p-[12px] bg-gray-100"></th>
                                <th className="p-[12px] bg-gray-100"></th>
                                <th className="p-[12px] bg-gray-100">Product</th>
                                <th className="p-[12px] bg-gray-100">Price</th>
                                <th className="p-[12px] bg-gray-100">Quantity</th>
                                <th className="p-[12px] bg-gray-100">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedido.map(producto => (
                                <tr key={producto.id}>
                                    <td className='border-b p-[12px]'>
                                        <button
                                            type="button"
                                            onClick={() => handleEliminarProductoPedido(producto.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                                <path d="M200 -440 v -80 h560 v80 H200 Z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className="border-b p-[12px]">
                                        <img
                                            className='w-[40px] h-[40px] object-cover'
                                            src={`${producto.image}`}
                                            alt={producto.name}
                                        />
                                    </td>
                                    <td className="border-b p-[12px] font-bold">{producto.name}</td>
                                    <td className="border-b p-[12px] font-serif">{formatearDinero(producto.price)}</td>
                                    <td className="border-b p-[12px] translate-x-7 font-serif">{producto.cantidad}</td>
                                    <td className="border-b p-[12px] font-serif">{formatearDinero(producto.price * producto.cantidad)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <div className="font-bold flex justify-between p-4">
                            <div className=" border-gray-300 p-[12px] text-right">Total: {formatearDinero(total)}</div>
                            {/* Botón para ver el checkout */}
                            <Link to="/cart">
                                <button
                                    onClick={() => console.log('Ver Checkout')}
                                    className={`${comprobarPedido() ?
                                        'bg-amber-100 cursor-notallowed' :
                                        'bg-amber-800 hover:bg-amber-950'} 
                                            ml-4 p-2 uppercase font-serif text-white text-center cursor-pointer`}
                                    disabled={comprobarPedido()}
                                >
                                    View Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartMenu;