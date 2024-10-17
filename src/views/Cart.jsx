import React from 'react';
import useFurniture from '../hooks/useFurniture';
import { formatearDinero } from '../helpers';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Cart = () => {
    const { pedido, total, handleSubmitNuevaOrden, handleEliminarProductoPedido } = useFurniture();
    useAuth({middleware: 'auth'});
    console.log(pedido);

    const comprobarPedido = () => pedido.length === 0;

    return (
        <>
        <div className="overflow-x-auto h-screen">
            {comprobarPedido() ? (
                <div>
                    <p className="text-center h-screen p-4 text-gray-500">
                        No products in cart.
                    </p>
                </div>
            ) : (
            <table className="min-w-[800px] border-separate border-spacing-0"> {/* Ajustar el ancho mínimo */}
                <thead>
                    <tr>
                        <th className="p-6 bg-gray-100 text-left"></th>
                        <th className="p-6 bg-gray-100 text-left"></th>
                        <th className="p-6 bg-gray-100 text-left">Product</th>
                        <th className="p-6 bg-gray-100 text-left">Price</th>
                        <th className="p-6 bg-gray-100 text-left">Quantity</th>
                        <th className="p-6 bg-gray-100 text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido.map(producto => (
                        <tr key={producto.id}>
                            <td className='border-b p-6'>
                                <button
                                    type="button"
                                    onClick={() => handleEliminarProductoPedido(producto.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-440v-80h560v80H200Z" /></svg>
                                </button>
                            </td>
                            <td className="border-b p-6">
                                <img
                                    className='w-16 h-16 object-cover' // Ajustar el tamaño de la imagen
                                    src={`${producto.image}`}
                                    alt={producto.name}
                                />
                            </td>
                            <td className="border-b p-6 font-bold">{producto.name}</td>
                            <td className="border-b p-6 font-serif">{formatearDinero(producto.price)}</td>
                            <td className="border-b p-6 font-serif">{producto.cantidad}</td> {/* Mostrar cantidad real */}
                            <td className="border-b p-6 font-serif">{formatearDinero(producto.price * producto.cantidad)}</td> {/* Calcular subtotal */}
                        </tr>
                    ))}
                    {/* Fila para mostrar el total de la orden */}
                    <tr className="font-bold">
                        <td colSpan="5" className="border-t border-gray-300 p-6 text-right">Total:</td>
                        <td className="border-t border-gray-300 p-6 flex justify-between items-center"> {/* Flexbox para alinear total y botón */}
                            {formatearDinero(total)} {/* Mostrar el total formateado */}
                            {/* Botón para realizar el pedido */}
                            <Link to="/checkout">
                                <button
                                    className={`${comprobarPedido() ? 
                                        'bg-amber-100 cursor-not-allowed' : 
                                        'bg-amber-800 hover:bg-amber-950 cursor-pointer' } 
                                        ml-4 p-2 uppercase font-serif text-white text-center`}
                                    disabled={comprobarPedido()}
                                >
                                    Proceed to checkout
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            )}
        </div>
        </>
    );
};

export default Cart;