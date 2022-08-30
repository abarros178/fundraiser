import React from 'react'
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft'

export const HeaderInicio = () => {
    return (
        <>
            <header>
                <div className=" w-full bg-center bg-cover h-[48rem]" style={{ backgroundImage: "url(https://newsletter.cuc.edu.co/wp-content/uploads/2021/04/Bloque-11_02-Mayo-2020-1920x768.jpg)" }}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span style={{textDecoration: 'none'}} className="text-blue-400 underline">Saas</span></h1>
                            <ButtonNeoSoft label={"Start proyect"} type={1}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
