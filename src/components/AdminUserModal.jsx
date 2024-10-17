import { useState, useEffect } from 'react';
import useFurniture from "../hooks/useFurniture";
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';

export default function AdminUserModal() {
    const { handleClickUserModal, handleDeleteUser, userId } = useFurniture();

    const deleteUser = async () => {

        const success = await handleDeleteUser(userId);
        if (success) {
            toast.success('User deleted');
            handleClickUserModal(); // Cerrar modal después de actualizar
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };

    return (
        <div>
            <h1 className='font-bold p-2'>Delete User?</h1>
            <div>
                <button className='text-teal-700 hover:text-teal-950 mr-2' type="button" onClick={deleteUser}>Confirm</button>
                <button className='text-red-700 hover:text-red-950 ml-2' type="button" onClick={handleClickUserModal}>Cancel</button>
            </div>
        </div>
    );
}