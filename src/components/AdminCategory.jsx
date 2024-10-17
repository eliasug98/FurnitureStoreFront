import useFurniture from "../hooks/useFurniture"

export default function AdminCategory({category}) {

    const {handleClickCategory, currentCategory} = useFurniture();
    const {id, name, icon} = category

    return (
        <button onClick={() => handleClickCategory(id)} className={`${currentCategory === id ? "bg-amber-400" : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
             <img 
                alt="Imagen Icono"
                src={`${icon}`}
                className="w-10"
            />
            <button 
                className="text-lg font-bold cursor-pointer truncate w-full h-full"                
            >
                {name}
            </button>
        </button>
    )
}