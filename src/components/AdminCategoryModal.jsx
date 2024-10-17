import { createRef, useEffect, useState } from 'react';
import useFurniture from "../hooks/useFurniture";
import { toast } from 'react-toastify';

export default function AdminCategoryModal() {
    const { handleClickCategoryModal, handleCreateCategory } = useFurniture();

    const iconRef = createRef();
    const nameRef = createRef();
    const descriptionRef = createRef();

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que todos los campos estén completos
        if (!iconRef.current.value || !nameRef.current.value || !descriptionRef.current.value) {
            setError('Please fill out all fields.');
            return; // Salir si hay campos vacíos
        }

        const data = {
            icon: iconRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        };

        console.log(data, 'data category');

        const success = await handleCreateCategory(data);
        if (success) {
            // toast.success('Product created');
            handleClickCategoryModal(); // Cerrar modal después de actualizar
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                {error && <span className='text-red-600'>{error}</span>}
                    <div className='flex justify-between items-center gap-1 m-1'>
                        <label className='font-bold'>Icon:</label>
                        <input className='border border-gray-300 rounded p-2 w-48' type="text" ref={iconRef} />
                    </div>
                    <div className='flex justify-between items-center gap-1 m-1'>
                        <label className='font-bold'>Name:</label>
                        <input className='border border-gray-300 rounded p-2 w-48' type="text" ref={nameRef} />
                    </div>
                    <div className='flex justify-between items-center gap-1 m-1'>
                        <label className='font-bold'>Description:</label>
                        <input className='border border-gray-300 rounded p-2 w-48' type="text" ref={descriptionRef} />
                    </div>

                    <div className='flex justify-between mt-4'>
                        <input className='text-teal-700 hover:text-teal-950 cursor-pointer' type="submit" value='Save changes' />
                        <button className='text-red-700 hover:text-red-950' type="button" onClick={handleClickCategoryModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}