import React from 'react'
import { StarOutlined, StarFilled, UpCircleTwoTone } from '@ant-design/icons';
import { Box, Typography } from '@mui/material';
export const Aprendiendo = () => {
    return (

        <>
            <Box sx={{ backgroundColor: "blue", height: "500px", width: "100%", display: "flex" , alignItems:"center"}}>
                <Box sx={{ backgroundColor: "red", width: "50%", height: "50%", textAlign: "center", margin: "0px auto", display: "flex", alignItems: "center", }}>
                    <Typography sx={{
                       margin: "0px auto"
                    }}>
                        En timecuc trabajamos para que los estudiantes de nuestra institución puedan graduarse oportunamente
                    </Typography>
                </Box>
            </Box>



        </>
    )
}
