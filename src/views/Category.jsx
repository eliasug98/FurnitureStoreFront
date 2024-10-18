import React from 'react'
import useFurniture from '../hooks/useFurniture'
import AdminCategory from '../components/AdminCategory';
import { useAuth } from '../hooks/useAuth';

export default function Category() {

    const { categories, handleClickCategoryModal } = useFurniture();
    useAuth({ middleware: 'admin' });

    return (
        <>
            <h1 className='text-4xl font-black'>Category</h1>
            <div className='flex items-center'>
                <p className='text-2xl my-10'>
                    Manage category from here.
                </p>
                <button onClick={handleClickCategoryModal} className="bg-indigo-600 hover:bg-indigo-800 rounded m-8 h-1/2 text-white w-1/4 mt-5 p-3 uppercase font-bold">
                    Add Category
                </button>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {categories.map(category => (
                    <AdminCategory
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>
        </>
    )
}
