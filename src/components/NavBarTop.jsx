import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFurniture from '../hooks/useFurniture';
import { useAuth } from '../hooks/useAuth';
import CartMenu from './CartMenu';

export default function NavBarTop() {
  const { pedido, userMessages, getUserMessages } = useFurniture();
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const { user } = useAuth({ middleware: 'guest' });

  // Llama a getUserMessages solo si user.id está disponible
  useEffect(() => {
    async function fetchData() {
      await getUserMessages(user.id);
    }
    fetchData();
  }, [user]);

  // Contar mensajes no leídos
  const unreadMessagesCount = userMessages.filter(message => !message.isRead && message.adminId != 0).length;

  return (
    <div className='flex justify-between p-2 mt-2'>
      <div className='flex space-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
        <Link to="/" className='px-10'>Need Help? Call 0900 800 900</Link>
      </div>
      <div className='flex space-x-2 items-center'>
        <div className='flex space-x-2 items-center mr-6'>
          {user &&
            <>
              <Link to="/profile" className='text-slate-950 hover:text-slate-500 mr-4'>My Account </Link>
              {/* Otros elementos aquí */}
              <Link to="/messages">
                {/* Círculo rojo */}
                {unreadMessagesCount > 0 &&
                  <div className='absolute w-[20px] h-[20px] -translate-x-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs'>
                    {unreadMessagesCount}
                  </div>
                }
                {/* Icono de mensajes */}
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 576 512">
                  <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
                </svg>
              </Link>
            </>
          }
        </div>

        <div
          className='relative'
          onMouseEnter={() => setCartMenuVisible(true)}
          onMouseLeave={() => setCartMenuVisible(false)}
        >
          {/* Círculo rojo */}
          <div className='absolute w-[20px] h-[20px] -translate-x-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs'>
            {pedido.length}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 28 32">
            <path d="M26,8.91A1,1,0,0,0,25,8H20V6A6,6,0,1,0,8,6V8H3A1,1,0,0,0,2,8.91l-2,22A1,1,0,0,0,1,32H27a1,1,0,0,0,1-1.089ZM10,6a4,4,0,0,1,8,0V8H10V6ZM2.1,30L3.913,10H8v2.277a2,2,0,1,0,2,0V10h8v2.277a2,2,0,1,0,2,0V10h4.087L25.9,30H2.1Z"></path>
          </svg>

          {/* Renderiza el menú del carrito con efecto de transición */}
          {isCartMenuVisible && (
            <div className="absolute left-[calc(100%)] transform -translate-x-full z-10 transition-opacity duration-300 ease-in-out opacity-100">
              <CartMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}