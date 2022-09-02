import { Button } from 'antd'
import React from 'react'

export const ButtonNeoSoft = ({ onClick = () => { }, label, type }) => {
    return (
        <>

            {
                type == 1 && <button onClick={onClick} className="mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{label}</button>

            }

            {
                type == 2 && <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">{label}</button>

            }



        </>
    )
}