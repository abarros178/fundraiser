import React from 'react'
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft.jsx'
export const CarrouselItem = ({ height, img }) => {
    console.log(img)
    return (
        <>
            <div style={{position: 'relative',display: 'inline-block'}}>
                <img src={img.url} alt="dede" className='img-fluid' />
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50" style={{ height: "100%", position: "absolute", top: 0, right: 0, }}>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span style={{ textDecoration: 'none' }} className="text-blue-400 underline">Saas</span></h1>
                        <ButtonNeoSoft label={"Start proyect"} type={1} />
                    </div>
                </div>
            </div>
        </>
    )
}
