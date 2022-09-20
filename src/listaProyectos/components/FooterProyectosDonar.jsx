import { Image } from '@mui/icons-material'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export const FooterProyectosDonar = () => {
    return (
        <Card style={{maxHeight:"400px", minHeight:"350px"}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/donaciones-79b72.appspot.com/o/proyecto_2_c.jpeg?alt=media&token=f1bd4e35-9c8c-4a8f-aa9d-9ed684e8639e" alt='sss' />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="black">
                            Soy Daniela Vega y gracias a su ayuda hoy ya soy toda una profesional en contaduría publica
                        </Typography>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}
