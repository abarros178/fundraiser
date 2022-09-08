import { Box, Typography } from '@mui/material'
import React from 'react'
export const CarrouselItem = ({ height, img }) => {
    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-block', }}>
                <img src={img.url} alt="dede" className='img-fluid' />
                <Box className=" bg-gray-900 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }}>
                    <Box padding={5} className=" bg-gray-900 bg-opacity-50" sx={{ width: "40%", height: "100%", position: "absolute", right: 0, display: "flex", alignItems: "center", }}>
                        <p
                            style={{ color: "white", display: "flex", padding: "10px"}}
                        >En timecuc trabajamos para que los estudiantes de nuestra institución puedan graduarse oportunamente</p>

                    </Box>
                </Box>
            </Box>
        </>
    )
}
