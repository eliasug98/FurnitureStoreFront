import useFurniture from "../hooks/useFurniture"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"


export default function Sidebar() {

    // const { categories } = useFurniture()
    // const {logout, user} = useAuth({middleware: 'auth'})

    const { categories } = useFurniture();


    return (
        <aside className="md:w-30 lg:w-70">
            {/* <div className="p-4">
                <img 
                    className="w-40"
                    src="img/logo.svg"
                    alt="Imagen Logo"
                />
            </div> */}

            <div className="mt-10">
                {categories.map( category => (
                    <Categoria
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>

        </aside>
    )
}
