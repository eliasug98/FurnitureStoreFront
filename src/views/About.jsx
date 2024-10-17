import React from 'react'
import { Link } from 'react-router-dom'
import MapView from '../components/MapView'
import useFurniture from '../hooks/useFurniture'
import { useState } from 'react'
import Offerings from '../components/Offerings'
import AboutHighlights from '../components/AboutHighlights'

export default function About() {

    // const { handleSubmit } = useFurniture();


    return (
        <>
            <div className='relative'>
                <img className='w-full h-[60vh] object-cover' src='https://iili.io/2dge4Hu.jpg' alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg bg-black bg-opacity-70">
                    <h1 className="text-4xl mb-4 text-center font-bold tracking-[10px]">ABOUT US</h1>
                </div>
            </div>

            <p className='text-sm h-64'>
                <Link to="/" className='text-slate-700'>HOME</Link> /
                <span className='text-slate-500'> ABOUT US</span>
            </p>

            <div className='flex flex-col md:flex-row mt-6 h-auto md:h-96'>
                <div className='w-full md:w-1/2 bg-white p-4 text-center flex flex-col items-center justify-center'>
                    <h1 className='tracking-[10px] font-serif font-bold text-center m-2'>ABOUT US</h1>
                    <p className='text-center m-2'>Globally predominate superior intellectual capital via excellent core competencies. Energistically enable holistic best practices with market positioning sources. Seamlessly communicate front-end opportunities for technically sound intellectual capital. Dramatically drive high-quality leadership for proactive e-business. Energistically iterate accurate networks rather than visionary e-services.</p>
                </div>
                <div className='w-full md:w-1/2 bg-slate-600 flex justify-center'>
                    <img src="https://iili.io/dpHN6hJ.jpg" alt="About Us" className='object-cover w-full h-auto' />
                </div>
            </div>

            <Offerings/>

            <AboutHighlights/>
        </>
    )
}
