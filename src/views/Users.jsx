import useFurniture from '../hooks/useFurniture'
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

export default function Users() {

    const { handleGetAllUsers, users, handleClickUserModal, setUserId } = useFurniture();

    useEffect(() => {
        handleGetAllUsers();
    }, [])


    return (
        <>
            <h1 className='text-4xl font-black'>Users</h1>
            <div className='flex items-center'>
                <p className='text-2xl my-10'>
                    Manage users from here.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {users.map((user) => (
                    <div key={user.id} className='border rounded p-4 shadow-md'>
                        <p><strong>Id:</strong> <span className='text-violet-950 uppercase font-semibold'>{user.id}</span></p>
                        <p><strong>Username:</strong> <span className='text-violet-950 font-semibold'>{user.username}</span></p>
                        <p><strong>Email:</strong> <span className='text-violet-950 font-semibold'>{user.email}</span></p>
                        <p><strong>Role:</strong> <span className='text-violet-950 uppercase font-semibold'>{user.role}</span></p>
                        <p><strong>Created Date:</strong> <span className='text-violet-950 uppercase font-semibold'>{new Date(user.createdDate).toLocaleDateString()}</span></p>
                        <button onClick={() => { handleClickUserModal(); setUserId(user.id); }} className='flex border border-solid border-slate-800 rounded p-2 mt-2 items-center gap-2 text-red-600 hover:bg-red-500 hover:text-white'>
                            <p className='font-bold'>Delete User</p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" >
                                <path d="M624-504v-72h240v72H624Zm-240 24q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM96-192v-92q0-25.78 12.5-47.39T143-366q55-32 116-49t125-17q64 0 125 17t116 49q22 13 34.5 34.61T672-284v92H96Zm72-72h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14.5T179-304q-4.95 2.94-7.98 8.24Q168-290.47 168-284v20Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21Zm-.21-73Zm0 361Z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}
