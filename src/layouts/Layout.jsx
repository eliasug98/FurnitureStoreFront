import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import Navbar from '../components/Navbar';
import ModalProducto from '../components/ModalProducto'
import useFurniture from '../hooks/useFurniture'
import { useAuth } from '../hooks/useAuth';
import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';
import UserModal from '../components/UserModal';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  useAuth({middleware: 'guest'})
  const { modal, userModal } = useFurniture();
  
  return (
    <>
      
      <main className='w-full bg-gray-100 p-3'>
        <NavBarTop/>
        <Navbar/>
        <Outlet />
        <Footer/>
      </main>


      <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
      </Modal>

      <Modal isOpen={userModal} style={customStyles}>
          <UserModal />
      </Modal>

      <ToastContainer />
    </>
  )
}