import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import clienteAxios from '../config/axios';
// import useSWR, { mutate } from 'swr'

const FurnitureContext = createContext();

const FurnitureProvider = ({ children }) => {

    const [categories, setcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState([]);
    const [usersOrders, setUsersOrders] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(0)
    const [modal, setModal] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const [categoryModal, setCategoryModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)
    const [messages, setMessages] = useState([]);
    const [userMessages, setUserMessages] = useState([]);

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.price * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    const obtenerValorDolar = async () => {
        try {
            const { data } = await clienteAxios('/api/Dolar')
            return data
        } catch (error) {
            console.log(error);
        }
    }

    const obtenercategories = async () => {
        // const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/productCategory', {
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            })
            console.log(data);
            setcategories(data)
            // setCurrentCategory(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerProductos = async () => {
        // const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/products', {
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            })
            setProducts(data)
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenercategories();
        obtenerProductos();
    }, [])

    const handleClickCategory = id => {

        // const category = categories.filter(category => category.id === id)[0]
        const category_actual = categories.filter(category => category.id === id)

        console.log(category_actual[0].id);

        setCurrentCategory(category_actual[0].id)

    }

    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleClickUserModal = () => {
        setUserModal(!userModal)
    }
    const handleClickCategoryModal = () => {
        setCategoryModal(!categoryModal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({ category_id, ...producto }) => {
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Saved correctly')
        } else {
            setPedido([...pedido, producto])
            toast.success('Added to order')
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Removed from order')
    }

    const handleSubmitNuevaOrden = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios.post('/api/orders',
                {
                    // user.id
                    orderDetails: pedido.map(producto => {
                        return {
                            productId: producto.id,
                            quantity: producto.cantidad,
                            price: producto.price
                        }
                    })
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            console.log(data);

            toast.success(data.message);
            setTimeout(() => {
                setPedido([])
            }, 1000);

        } catch (error) {
            console.log(error)
        }
    }

    const handleGetUserOrders = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/orders/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data);
            setOrders(data)
            // setCurrentCategory(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetAllUserOrders = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/orders', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUsersOrders(data)
            // setCurrentCategory(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateUser = async (data) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/users`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const handleDeleteUser = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.delete(`/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const handleGetAllUsers = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/users/all', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data);
            setUsers(data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleClickCompleteOrder = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/orders/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickDeleteOrder = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.delete(`/api/orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // mutate('/api/orders');
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickProductoAgotado = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/products/stock/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const handleCreateProduct = async (data) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.post(`/api/products`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const handleCreateCategory = async (data) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.post('/api/productCategory', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const getMessages = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const { data } = await clienteAxios('/api/messages', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessages(data); // Devuelve la lista de mensajes
        } catch (error) {
            console.error(error);
        }
    };

    const getUserMessages = async (userId) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        console.log(userId, 'userId provider');

        try {
            const { data } = await clienteAxios(`/api/messages/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            setUserMessages(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const handleSendMessage = async (message) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        console.log(message);

        try {
            await clienteAxios.post('/api/messages', message, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            return true;
        } catch (error) {
            console.error(error, 'errorr');
            return false;
        }
    };

    const markMessagesAsRead = async (userId) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.post(`/api/messages/markAsRead/${userId}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            return true;
        } catch (error) {
            console.error(error, 'errorr');
            return false;
        }
    };

    return (
        <FurnitureContext.Provider
            value={{
                products,
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                userModal,
                categoryModal,
                handleClickModal,
                handleClickUserModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden,
                handleClickCompleteOrder,
                handleClickProductoAgotado,
                obtenerValorDolar,
                handleUpdateUser,
                orders,
                handleGetUserOrders,
                handleGetAllUserOrders,
                usersOrders,
                handleGetAllUsers,
                users,
                handleClickDeleteOrder,
                handleCreateProduct,
                setUserId,
                userId,
                handleDeleteUser,
                handleClickCategoryModal,
                handleCreateCategory,
                getMessages,
                messages,
                getUserMessages,
                userMessages,
                handleSendMessage,
                markMessagesAsRead
            }}
        >{children}</FurnitureContext.Provider>
    )
}

export {
    FurnitureProvider
}
export default FurnitureContext