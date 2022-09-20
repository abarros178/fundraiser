import { Image } from '@mui/icons-material'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export const FooterProyectosDonar = () => {
    return (
        <Card
            sx={{
                minWidth: "20%", minHeight: "100%", "&:hover": {
                    boxShadow: "#e9e9e9 0px 20px 20px 0px",
                    cursor: "pointer"
                }
            }}
            hover="true"
        >
            <CardContent sx={{ padding: "10px", height: "100%" }}>
                <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} rowSpacing={2} height="100%">
                    <Grid item xs={6} >
                        <img src="https://firebasestorage.googleapis.com/v0/b/donaciones-79b72.appspot.com/o/proyecto_2_c.jpeg?alt=media&token=f1bd4e35-9c8c-4a8f-aa9d-9ed684e8639e" alt='sss' />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <Typography variant="h5" color="text.secondary">
                            Soy Daniela Vega y gracias a su ayuda hoy ya soy toda una profesional en contaduría publica
                        </Typography>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
