import React from 'react'
export const CarrouselItem = ({ height, img }) => {
    console.log(img)
    return (
        <>
            <div style={{ position: 'relative', display: 'inline-block'}}>
                <img src={img.url} alt="dede" className='img-fluid' />
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50" style={{ height: "100%", position: "absolute", top: 0, right: 0 }}>
                    <div className="text-center bg-gray-900 bg-opacity-50" style={{ width: "40%", height: "100%", position: "absolute", right: 0, }}>
                        <h1 style={{ position: "absolute", top: "50%", right: 30,left:30}} className="text-2xl  text-white lg:text-2xl">En timecuc trabajamos para que los estudiantes de nuestra institución puedan graduarse oportunamente</h1>

                    </div>
                </div>
            </div>
        </>
    )
}
