import { Box, Typography } from '@mui/material'
import React from 'react'
export const CarrouselItem = ({ height, img }) => {
    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-block', }}>
                <img src={img.url} alt="dede" className='img-fluid' />
                <Box className=" bg-gray-900 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }}>
                    <Box padding={5} className=" bg-gray-900 bg-opacity-50" sx={{ width: "40%", height: "100%", display: "flex", alignItems: "center", }}>
                        <Typography
                            style={{ color: "white" }}
                            sx={{
                                margin: "0px auto"
                            }}>
                            En timecuc trabajamos para que los estudiantes de nuestra institución puedan graduarse oportunamente</Typography>

                    </Box>
                </Box>
            </Box>
        </>
    )
}
