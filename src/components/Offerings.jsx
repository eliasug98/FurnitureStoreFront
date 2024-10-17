import React from 'react';

const Offerings = () => {
    const offerings = [
        {
            icon: "https://iili.io/dpHOYyF.png",
            title: "TOP QUALITY",
            description: "Completely incentivize an expanded array of vortals whereas go forward users. Energistically conceptualize an expanded array of 'outside the box' thinking and integrated materials."
        },
        {
            icon: "https://iili.io/dpHeJAF.png",
            title: "REASONABLE PRICES",
            description: "Completely incentivize an expanded array of vortals whereas go forward users. Energistically conceptualize an expanded array of 'outside the box' thinking and integrated materials."
        },
        {
            icon: "https://iili.io/dpHeINn.png",
            title: "TOP-NOTCH SUPPORT",
            description: "Completely incentivize an expanded array of vortals whereas go forward users. Energistically conceptualize an expanded array of 'outside the box' thinking and integrated materials."
        },
        {
            icon: "https://iili.io/dpHe2ta.png",
            title: "30 DAYS RETURN",
            description: "Completely incentivize an expanded array of vortals whereas go forward users. Energistically conceptualize an expanded array of 'outside the box' thinking and integrated materials."
        }
    ];

    return (
        <>
            <div className='bg-slate-50 mt-10'>
                <h1 className='text-center font-serif p-6 text-2xl tracking-[6px]'>WHAT WE OFFER</h1>
                <div className="flex flex-col md:flex-row justify-around p-4 ">
                    {offerings.map((offering, index) => (
                        <div key={index} className="rounded-lg m-2 text-center flex flex-col items-center p-6">
                            <div className="mb-2">
                                <img src={`${offering.icon}`} alt="" />
                            </div>
                            <h2 className="font-serif text-base">{offering.title}</h2>
                            <p className="text-sm text-gray-600">{offering.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Offerings;
