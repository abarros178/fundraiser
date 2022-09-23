import { Skeleton, Stack } from '@mui/material'
import { Carousel } from 'antd'
import React from 'react'
import { useHttpRequestTwo } from '../../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../../settings/Settings'
import { CarrouselItem } from './CarrouselItem.jsx'

export const HeaderInicio = ({ height = '600px', data }) => {
    return (
        <>

            <Carousel autoplay >
                {
                    data?.map(({ objeto }, index) => (
                        <>
                            <CarrouselItem height={height} item={objeto} key={index} />
                        </>
                    ))

                }

            </Carousel>
        </>
    )
}
