import { Carousel, Image } from 'antd'
import React from 'react'
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft'
import { carrousel } from '../utils/Datos'
import { CarrouselItem } from './CarrouselItem.jsx'

export const HeaderInicio = ({ height = '600px' }) => {
    return (
        <>
            <Carousel autoplay >
                {
                    carrousel.map((img, index) => (
                        <CarrouselItem height={height} img={img} key={index} />
                    ))
                }
            </Carousel>
        </>
    )
}
