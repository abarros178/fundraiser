//import { Box, Typography } from '@mui/material'
import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export const CarrouselItem = ({ height, img }) => {
    return (
        <div style={{ maxHeight: "500px" }}>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} centerMode={false} useKeyboardArrows={true}>
                <div style={{ maxHeight: "500px" }}>
                    <img src={img.url} alt='sss' />
                    <Box className=" bg-gray-200 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }}></Box>
                    <Box padding={5} className=" bg-gray-900 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }}>
                        <p className="legend  bg-gray-700 bg-opacity-50 mb-5 " style={{ fontSize: "16px" }}>En timecuc trabajamos para que los estudiantes de nuestra institución xspuedan graduarse oportunamente</p>
                    </Box>

                </div>

            </Carousel>
        </div>
    )
}

// export const CarrouselItem = ({ height, img }) => {
//     return (
//         <>
//             <Box sx={{ position: 'relative', display: 'inline-block' }} className="h-96  ">
//                 <img src={img.url} alt="dede" className='img-fluid h-auto' />
//                 <Box className=" bg-gray-900 bg-opacity-50" sx={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }}>
//                     <Box padding={5} className=" bg-gray-900 bg-opacity-50" sx={{ width: "40%", height: "100%", display: "flex", alignItems: "center", }}>
//                         <Typography
//                             style={{ color: "white" }}
//                             sx={{
//                                 margin: "0px auto"
//                             }}>
//                             En timecuc trabajamos para que los estudiantes de nuestra institución puedan graduarse oportunamente
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     )
// }

