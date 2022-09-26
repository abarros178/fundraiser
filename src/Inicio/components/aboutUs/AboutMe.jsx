import { Image } from '@mui/icons-material'
import { Avatar, Box, Card, CardHeader, Grid } from '@mui/material'
import React from 'react'

export const AboutMe = ({ data }) => {
    return (
        <>
            <Card sx={{width:"100%", maxWidth: "345px", padding: "30px", minHeight: "400px",minWidth:"250px" }}>
                <Grid container justifyContent="center" >
                    <Grid item xs={12} >
                        <Box sx={{display:"flex", justifyContent:"center"}}>

                            <Avatar  alt="testimonial" src={data.img} style={{width:"100px",height:"100px"}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}  justifyContent={"center"} marginTop={3}>
                        <p className="leading-relaxed">{data.descripcion}</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{data.nombre}</h2>
                        <p className="text-gray-500">{data.puesto}</p>
                        <br />
                        <p className="text-gray-500">"{data.other.frase}"</p>
                    </Grid>
                </Grid>
            </Card>

        </>
    )
}
