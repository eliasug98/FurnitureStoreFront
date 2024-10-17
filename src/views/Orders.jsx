import useFurniture from '../hooks/useFurniture';
import { useState, useEffect } from 'react';

export default function Orders() {
    const { 
        handleClickCompleteOrder, 
        handleGetAllUsers, 
        users, 
        handleClickDeleteOrder, 
        products, 
        handleGetAllUserOrders,
        usersOrders // Suponiendo que este es el estado que contiene las órdenes
    } = useFurniture();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Número de órdenes por página

    // Estado para el filtro
    const [filter, setFilter] = useState('inProcess'); // 'inProcess' o 'dispatched'

    // Obtener usuarios y órdenes al montar el componente
    useEffect(() => {
        handleGetAllUsers();
        fetchUserOrders(); // Obtener órdenes al montar el componente
    }, []);

    // Función para obtener órdenes
    const fetchUserOrders = async () => {
        try {
            await handleGetAllUserOrders(); // Llama a la función para obtener las órdenes
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    // Función para completar una orden
    const completeOrder = async (id) => {
        try {
            await handleClickCompleteOrder(id); // Llama a la función para completar la orden
            await fetchUserOrders(); // Vuelve a obtener las órdenes después de completar
 
        } catch (err) {

            setError(err); // Manejo del error si ocurre
        }
    };

    // Función para eliminar y revalidar
    const deleteOrderAndRefresh = async (id) => {
        await handleClickDeleteOrder(id); // Llama a la función de eliminación
        await fetchUserOrders(); // Vuelve a obtener las órdenes después de eliminar
        
        // Comprobar si no quedan órdenes
        if (usersOrders.length === 1) {
            window.location.reload(); // Refrescar la página si no hay órdenes
        }
    };

    // Filtrar órdenes según el estado seleccionado
    const filteredOrders = usersOrders.filter(order => 
        filter === 'inProcess' ? !order.isCompleted : order.isCompleted
    );

    // Calcular el índice de las órdenes a mostrar
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    if (loading) return 'Cargando...'; // Manejo de carga
    if (error) return <p>Error: {error.message}</p>; // Manejo de errores

    return (
        <div>
            <h1 className='text-4xl font-black'>Orders</h1>
            <p className='text-2xl my-10'>Manage orders from here.</p>

            {/* Botones de filtro */}
            <div className="mb-4">
                <button 
                    onClick={() => setFilter('inProcess')} 
                    className={`px-4 py-2 rounded mr-1 ${filter === 'inProcess' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    In Process
                </button>
                <button 
                    onClick={() => setFilter('dispatched')} 
                    className={`px-4 py-2 rounded ml-1 ${filter === 'dispatched' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    Dispatched
                </button>
            </div>

            {/* Historial de pedidos */}
            <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-semibold underline">Current Orders</h2>
                {filteredOrders.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentOrders.map((order) => {
                            const user = users.find(user => user.id === order.userId);
                            return (
                                <div key={order.id} className="border rounded p-4 shadow-md">
                                    <p><strong>Order ID:</strong> <span className='text-violet-950 uppercase font-semibold'>{order.id}</span></p>
                                    <p><strong>Username:</strong> <span className='text-red-600 font-semibold'>{user ? user.username : 'User not found'}</span></p>
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
                                    <div className='flex'>
                                        <button
                                            type="button"
                                            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-1/2 cursor-pointer m-1'
                                            onClick={() => completeOrder(order.id)} // Completar la orden
                                        >Complete</button>
                                        <button
                                            type="button"
                                            className='bg-red-600 hover:bg-red-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-1/2 cursor-pointer m-1'
                                            onClick={() => deleteOrderAndRefresh(order.id)} // Llama a la función para eliminar y revalidar
                                        >Delete</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Your order history is empty.</p>
                )}

                {/* Paginación */}
                {filteredOrders.length > itemsPerPage && (
                    <div className="flex justify-center mt-4">
                        {[...Array(Math.ceil(filteredOrders.length / itemsPerPage)).keys()].map(number => (
                            <button key={number} onClick={() => setCurrentPage(number + 1)} className={`mx-1 px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                {number + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}