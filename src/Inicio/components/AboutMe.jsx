import { Image } from '@mui/icons-material'
import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'

export const AboutMe = ({ data }) => {
    return (
        <>
            {/* <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" id="acercade">
                <div className="h-full text-center">
                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={data.img} />
                    <p className="leading-relaxed">{data.descripcion}</p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{data.nombre}</h2>
                    <p className="text-gray-500">{data.puesto}</p>
                </div>
            </div> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Image src={data.img} sx={{ width: 100, height: 100 }} />
                    }
                />
            </Card>

        </>
    )
}
