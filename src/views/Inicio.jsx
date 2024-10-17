import useSWR from 'swr'
import Producto from '../components/Product'
import clienteAxios from '../config/axios'
import useFurniture from '../hooks/useFurniture'
import { Link } from 'react-router-dom'
import CategoriaInicio from '../components/CategoriaInicio'
import FeaturedProducts from '../components/FeaturedProducts'

export default function Inicio() {

  // const { currentCategory } = useFurniture()

  // // Consulta SWR
  // const token = localStorage.getItem('AUTH_TOKEN');
  // const fetcher = () => clienteAxios('/api/productos', {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // }).then(data => data.data)

  // const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
  //   refreshInterval: 1000
  // })

  // if(isLoading) return 'Cargando...';
  // const productos = data.data.filter(producto => producto.category_id === currentCategory.id)

  return (
    <>
      <div className='relative'>
        <img className='w-full h-[90vh] object-cover' src='https://iili.io/dpHedwg.jpg' alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg bg-black bg-opacity-50">
          <h1 className="text-6xl mb-4 text-center">Scandinavian Interior</h1>
          <Link to='/shop' className="mt-4 p-5 text-2xl border-2 border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-black hover:bg-opacity-50">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
          <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
        </svg>
        <p className='mt-5 text-2xl'>Finest quality furniture</p>
      </div>

      <div className="flex mt-8">
        <CategoriaInicio
          nombre='Indoor Furniture'
          imagen='https://iili.io/dpHOiue.jpg'
          url='/'
        />
        <CategoriaInicio
          nombre='Office Furniture'
          imagen='https://iili.io/dpHOLZb.webp'
          url='/'
        />
        <CategoriaInicio
          nombre='Outdoor Furniture'
          imagen='https://iili.io/dpHOswu.jpg'
          url='/'
        />
      </div>

      <div className='p-6 flex flex-col md:flex-row'> {/* Cambiado a flex-col para pantallas pequeñas */}
        <img
          src="https://iili.io/dpHOu4V.jpg"
          alt="Design Cama"
          className="w-full h-auto md:w-[900px] md:h-[500px] object-cover"
        />
        <div className='flex flex-col justify-center items-center p-12'>
          <p className='font-bold text-5xl p-2 text-center'>Drive your own Design</p>
          <p className='p-2 text-xl text-center'>Offering various styles and multiple fabric options, we let you put a personal touch on your furniture. This quality collection is handcrafted in USA.</p>
          <button className='text-white bg-yellow-400 hover:bg-yellow-500 p-2 rounded '>Read More</button>
        </div>
      </div>

      <div>
        <h2 className='font-bold text-3xl'>Featured Products</h2>
        <div className='flex p-4 flex-col md:flex-row'>
          <FeaturedProducts
            imagen="https://iili.io/dpHex9t.webp"
            precio="$230,000.00"
            nombre="Indoor armchair"
            rate={2}
            url="/"
          />
          <FeaturedProducts
            imagen="https://iili.io/dpHezAX.jpg"
            precio="$120,000.00"
            nombre="Wooden armchair"
            rate={3}
            url="/"
          />
          <FeaturedProducts
            imagen="https://iili.io/dpSxmue.jpg"
            precio="$180,000.00"
            nombre="Outdoor table"
            rate={4}
            url="/"
          />
        </div>
    </div>
    </>
  )
}