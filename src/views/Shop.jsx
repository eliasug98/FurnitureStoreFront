import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Resumen from '../components/Resumen';
import Sidebar from '../components/Sidebar';
import useFurniture from '../hooks/useFurniture';
import { useAuth } from '../hooks/useAuth';

export default function Shop() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("menu_order");
    const [searchTerm, setSearchTerm] = useState("");
    // const {user} = useAuth();
    
    const { currentCategory, obtenerValorDolar, products } = useFurniture();

    const dolar = obtenerValorDolar();
    console.log(dolar);
    
    const itemsPerPage = 4;

    // Calculate indices for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // State for filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Effect to filter products whenever searchTerm or currentCategory changes
    useEffect(() => {
        const filterProducts = () => {
            let filtered = products.filter(product => product.available === true);

            // Si hay categoría seleccionada
            if (currentCategory !== 0) {
                filtered = filtered.filter(product => product.categoryId === currentCategory);
            }

            // Filtrar por término de búsqueda
            if (searchTerm) {
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            return filtered.length > 0 ? filtered : products;
        };

        setFilteredProducts(filterProducts());
        setCurrentPage(1); // Reset to first page on filter change
    }, [searchTerm, currentCategory, products]);

    // Sort filtered products based on selected option
    let sortedProducts = [...filteredProducts];

    if (sortOption === "popularity") {
        sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortOption === "price_high_to_low") {
        sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    }

    // Get current items for pagination
    const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
    
    // Calculate total pages
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        setCurrentPage(1); // Reset to first page when sorting
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    return (
        <>
            <div className='relative'>
                <img className='w-full h-[60vh] object-cover rounded-lg shadow-lg' src='https://iili.io/dpHOXaI.jpg' alt="Interior" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg bg-black bg-opacity-70 rounded-lg shadow-lg">
                    <h1 className="text-4xl mb-4 text-center font-bold">S H O P</h1>
                </div>
            </div>
            
            <p className='text-sm h-16 mb-4'>
                <Link to="/" className='text-slate-700 hover:underline'>HOME</Link> /
                <span className='text-slate-500'> SHOP</span>
            </p>
    
            {/* Centered Sort Dropdown and Search Input */}
            <div className="flex justify-center mb-4 space-x-4">
                <form>
                    <select 
                        name="orderby" 
                        className="orderby border rounded-md p-2 bg-white text-gray-700 shadow-md focus:outline-none focus:ring focus:ring-blue-400 transition duration-150 ease-in-out" 
                        aria-label="Shop order" 
                        value={sortOption} 
                        onChange={handleSortChange}
                    >
                        <option value="menu_order">Default sorting</option>
                        <option value="popularity">Sort by price LOW to HIGH</option>
                        <option value="price_high_to_low">Sort by price HIGH to LOW</option>
                    </select>
                </form>
    
                {/* Search Input */}
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="border rounded-md p-2 shadow-md focus:outline-none focus:ring focus:ring-blue-400 transition duration-150 ease-in-out"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
    
            {/* Layout with Sidebar and Product Cards */}
            <div className='flex flex-col md:flex-row'>
                {/* Sidebar Component */}
                <div className='w-full md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md'>
                    <Sidebar /> {/* El Sidebar puede manejar la selección de categorías */}
                </div>
    
                {/* Product Cards Section */}
                <div className='flex flex-col flex-grow justify-center p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-screen-lg w-full mx-auto'>
                        {currentItems.map((product) => (
                            <div key={product.id} className="flex justify-center h-fit">
                                {/* Pasar el objeto completo a ProductCard */}
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
    
                {/* Resumen Component */}
                <div className='flex justify-center items-center w-full sm:w-auto mt-4 sm:mt-0 p-4 bg-gray-100 rounded-lg shadow-md'>
                    <Resumen />
                </div>
            </div>
    
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 sm:hidden">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        aria-label={`Go to page ${index + 1}`}
                        className={`mx-1 px-3 py-1 rounded transition duration-200 ease-in-out ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
    
            {/* Pagination Controls for larger screens */}
            <div className="hidden sm:flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        aria-label={`Go to page ${index + 1}`}
                        className={`mx-1 px-3 py-1 rounded transition duration-200 ease-in-out ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}