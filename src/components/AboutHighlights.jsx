import React from 'react';

const AboutHighlights = () => {
    const highlights = [
        {
            image: "https://iili.io/dpHOR3B.png",
            icon: "https://iili.io/dpHeRVf.png",
            title: "DESIGNED FOR DETAIL",
            description: "Completely brand B2B deliverables through high standards in leadership. Objectively foster innovative catalysts for change rather than pandemic total linkage. Dramatically evolve market positioning portals whereas robust benefits."
        },
        {
            image: "https://iili.io/dpHO5YP.png",
            icon: "https://iili.io/dpHOECv.png",
            title: "CRAFTED WITH CARE",
            description: "Completely incentivize an expanded array of vortals whereas go forward users. Energistically conceptualize an expanded array of 'outside the box' thinking and integrated materials."
        },
        {
            image: "https://iili.io/dpHO7v1.png",
            icon: "https://iili.io/dpHeTts.png",
            title: "SATISFIED CUSTOMERS",
            description: "Completely brand B2B deliverables through high standards in leadership. Objectively foster innovative catalysts for change rather than pandemic total linkage. Dramatically evolve market positioning portals whereas robust benefits."
        },
    ];

    return (
        <>
            {highlights.map((highlight, index) => (
                <div key={index} className='flex flex-col md:flex-row mt-6 mb-6 h-auto md:h-[600px]'>
                    {/* Condición para cambiar el orden */}
                    {index % 2 === 0 ? (
                        <>
                            <div className='w-full md:w-1/2 bg-slate-600 flex justify-center'>
                                <img src={`${highlight.image}`} alt="About Us" className='object-cover w-full h-auto' />
                            </div>
                            <div className='w-full md:w-1/2 bg-white p-4 text-center flex flex-col items-center justify-center'>
                                <div className="mb-2">
                                    <img src={`${highlight.icon}`} alt="" />
                                </div>
                                <h1 className='tracking-[10px] font-serif font-bold text-center m-2'>{highlight.title}</h1>
                                <p className='text-center m-2'>{highlight.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='w-full md:w-1/2 bg-white p-4 text-center flex flex-col items-center justify-center'>
                                <div className="mb-2">
                                    <img src={`${highlight.icon}`} alt="" />
                                </div>
                                <h1 className='tracking-[10px] font-serif font-bold text-center m-2'>{highlight.title}</h1>
                                <p className='text-center m-2'>{highlight.description}</p>
                            </div>
                            <div className='w-full md:w-1/2 bg-slate-600 flex justify-center'>
                                <img src={`${highlight.image}`} alt="About Us" className='object-cover w-full h-auto' />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default AboutHighlights;
