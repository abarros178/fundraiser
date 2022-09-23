//import { Box, Typography } from '@mui/material'
import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export const CarrouselItem = ({ height, item }) => {
    return (
        <div style={{ maxHeight: "500px" }}>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} centerMode={false} useKeyboardArrows={true}>
                <div style={{ maxHeight: "500px" }}>
                    <img src={item.url} alt='sss' />
                    <Box className=" bg-gray-900 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0, display: "flex", alignItems: "end" }}>
                    <p className="legend ocultarCarrouselText" style={{ fontSize: "16px" }}>{item.descripcion}</p>
                    </Box>
                </div>
            </Carousel >
        </div >
    )
}



