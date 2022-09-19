import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
export const ProyectItem = ({ proyecto }) => {

    const navigate = useNavigate()
    return (

        <>
            <Card
                sx={{
                    minWidth: "20%", minHeight: "100%", "&:hover": {
                        boxShadow: "#e9e9e9 0px 20px 20px 0px",
                        cursor: "pointer"
                    }
                }}
                onClick={() => navigate("/donar/proyecto/" + proyecto.uid)}
                hover="true"
            >
                <CardContent sx={{ padding: "10px" }}>
                    <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} rowSpacing={2}>

                        <Grid item xs={12} md={6} sx={{display:"flex", alignItems:"center", justifyContent:"center"}} >
                            <Box sx={{width:"80%"}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {proyecto.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {proyecto.descripcion}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className="esconder">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={proyecto.other.img_c} />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>



        </>
    )
}
