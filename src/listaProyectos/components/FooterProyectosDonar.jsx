import { Image } from '@mui/icons-material'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'

export const FooterProyectosDonar = () => {
    const { data = [], loading } = useHttpRequestTwo(setting.objetos + "tipo/FOOTERPROYECTOS", METHOD.GET)
    console.log(data)
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
                    <Grid item xs={12} md={6}>
                        {
                            data?.map((proyecto, index) => (
                                <img src={proyecto?.objeto.value} alt='sss' />
                            ))
                        }
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
