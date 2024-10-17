import React from 'react';
import useFurniture from '../hooks/useFurniture';
import { formatearDinero } from '../helpers';

export default function CheckoutCart() {
    const { pedido, total } = useFurniture();

    return (
<div className="sm:overflow-x-hidden"> {/* Ocultar desplazamiento horizontal en pantallas pequeñas */}
    <table className="min-w-[600px] max-w-[800px] border-separate border-spacing-0 mx-auto"> {/* Ancho mínimo y máximo */}
        <thead>
            <tr>
                <th className="p-6 bg-gray-100 text-left font-normal underline">Product</th>
                <th className="p-6 bg-gray-100 text-left font-normal underline">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {pedido.map(producto => (
                <tr key={producto.id}>
                    <td className="border-b p-6 font-normal">{producto.name} <span className='font-bold'>x{producto.cantidad}</span></td>
                    <td className="border-b p-6 font-serif">{formatearDinero(producto.price * producto.cantidad)}</td> {/* Calcular subtotal */}
                </tr>
            ))}
            {/* Fila para mostrar el total de la orden */}
            <tr className="font-bold">
                <td className="border-t border-gray-300 p-6 font-medium">Total:</td>
                <td className="border-t border-gray-300 p-6 font-medium">
                    {formatearDinero(total)} {/* Mostrar el total formateado */}
                </td>
            </tr>
        </tbody>
    </table>
</div>
    );
}
