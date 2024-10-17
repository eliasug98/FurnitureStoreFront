import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import useFurniture from '../hooks/useFurniture';

const MyAccount = () => {
    const { user } = useAuth({ middleware: 'auth' });
    const { handleClickUserModal, handleGetUserOrders, orders, products } = useFurniture();

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Número de órdenes por página

    useEffect(() => {
        handleGetUserOrders();
    }, []);

    // Calcular el índice de las órdenes a mostrar
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2">
            {/* Información del usuario */}
            <div className='flex flex-col items-center'>
                <div className="p-6 rounded mb-6 bg-white">
                    <h1 className="text-2xl font-bold mb-4">My Account</h1>
                    <h2 className="text-xl font-semibold mb-8">User Information</h2>
                    {user ? (
                        <>
                            <p className='mt-6'><strong>Username:</strong> {user.username}</p>
                            <p className='mt-6'><strong>Email:</strong> {user.email}</p>
                            <button onClick={handleClickUserModal} className='font-bold mt-4 text-blue-800 hover:text-blue-950 flex flex-row items-center gap-2'>
                                {/* Icono aquí */}
                                Update User Information
                            </button>
                        </>
                    ) : (
                        <p>Loading user information...</p>
                    )}
                </div>
            </div>
            {/* Historial de pedidos */}
            <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-semibold underline mb-2">Order History</h2>
                {orders.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentOrders.map((order) => (
                            <div key={order.id} className="rounded p-4 shadow-md bg-white border-amber-950 border-4">
                                <p><strong>Order ID:</strong> <span className='text-violet-950 uppercase font-semibold'>{order.id}</span></p>
                                <p><strong>Order Date:</strong> <span className='text-violet-950 uppercase font-semibold'>{new Date(order.orderDate).toLocaleDateString()}</span></p>
                                <ul className="ml-4">
                                    {order.orderDetails.map((detail) => {
                                        const product = products.find(product => product.id === detail.productId);
                                        return (
                                            <li key={detail.productId} className="py-1">
                                                <p><strong>Product Name:</strong> <span className='text-violet-950 uppercase font-semibold'>{product ? product.name : 'Product not found'}</span></p>
                                                <p><strong>Quantity:</strong> <span className='text-violet-950 uppercase font-semibold'>{detail.quantity}</span></p>
                                                <p><strong>Price:</strong> <span className='text-violet-950 uppercase font-semibold'>${detail.price}</span></p>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p><strong>Total:</strong> <span className='text-violet-950 uppercase font-semibold'>${order.total}</span></p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your order history is empty.</p>
                )}

                {/* Paginación */}
                {orders.length > itemsPerPage && (
                    <div className="flex justify-center mt-4">
                        {[...Array(Math.ceil(orders.length / itemsPerPage)).keys()].map(number => (
                            <button key={number} onClick={() => paginate(number + 1)} className={`mx-1 px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                {number + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAccount;