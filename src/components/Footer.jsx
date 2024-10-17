import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between items-center p-4 bg-gray-200 text-white">
            <div className="flex items-center">
                <img src="https://iili.io/dpHOeZG.png" alt="Logo" className="h-10" />
            </div>
            <div className="text-sm text-black">
                © Furniture-Store - 2024. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;