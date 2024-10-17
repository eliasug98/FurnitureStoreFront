import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { FurnitureProvider } from './context/FurnitureProvider';
import router from './router';
import './index.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FurnitureProvider>
            <RouterProvider router={router} />
        </FurnitureProvider>
    </React.StrictMode>,
);