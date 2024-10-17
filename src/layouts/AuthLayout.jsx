import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
      <Link to="/" className='mr-6 font-serif flex p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512">
          <path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>

        <p className='ml-2'>Go Home</p>
      </Link>

      <main className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center'>

        <img
          src='https://iili.io/dpHO8G4.jpg'
          alt='imagen logotipo'
          className="max-w-xs"
        />

        <div className='p-10 w-full'>
          <Outlet />
        </div>

      </main>
    </>
  )
}