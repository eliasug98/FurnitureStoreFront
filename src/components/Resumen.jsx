import { formatearDinero } from "../helpers";
import useFurniture from "../hooks/useFurniture"
import ResumenProducto from "./ResumenProducto";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from 'react-toastify';

export default function Resumen() {
    const {pedido, total, handleSubmitNuevaOrden} = useFurniture();
    const { user } = useAuth({middleware: 'guest'});

    const comprobarPedido = () => pedido.length === 0;

    const comprobarUser = () => {
        if(!user) {
            toast.error('you must be logged to place an order');
        }
    }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     handleSubmitNuevaOrden(logout);
    // }
    console.log(pedido);

    return (
        <aside className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className="text-4xl font-serif">
                Cart
            </h1>
            <p className="text-lg my-5">
                Here you can see the summary and totals of your order
            </p>

            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">
                        No products in the cart
                    </p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto 
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </div>

            <p className="text-xl mt-10">
                Total: {''}
                {formatearDinero(total)}
            </p>

            <div 
                className="w-full"
                // onSubmit={handleSubmit}
            >
                <div className="mt-5">
                    {/* <input
                        type="submit"
                        className={`${comprobarPedido() ? 
                            'bg-indigo-100' : 
                            'bg-indigo-600 hover:bg-indigo-800' } 
                            px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    /> */}
                    <Link to="/cart">
                        <input className={`${comprobarPedido() ? 
                                'bg-amber-100' : 
                                'bg-amber-600 hover:bg-amber-800 cursor-pointer' } 
                                px-5 py-2 uppercase font-serif text-white text-center w-full`}
                            value="View Checkout"
                            disabled={comprobarPedido()}
                            onClick={() => comprobarUser()}
                            >
                        </input>
                    </Link>
                    
                </div>
            </div>
        </aside>
    )
}
