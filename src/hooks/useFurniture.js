import { useContext } from 'react'
import FurnitureContext from '../context/FurnitureProvider'

const useFurniture = () => {
    return useContext(FurnitureContext)
}

export default useFurniture