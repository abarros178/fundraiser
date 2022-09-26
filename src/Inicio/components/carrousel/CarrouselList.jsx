import { Box, Grid } from '@mui/material'
import { Carousel } from 'antd'
import React from 'react'
import { CarrouselItem } from './CarrouselItem.jsx'

export const HeaderInicio = ({ height = '600px', data }) => {
    return (
        <>
            <Carousel autoplay >
                {
                    data?.map(({ objeto }, index) => (

                        <Box key={index}>
                            <CarrouselItem height={height} item={objeto} />
                        </Box>
                    ))
                }
            </Carousel>
        </>
    )
}
