import { Box, Button, Container, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ProyectListInicio } from '../../proyecto/components/ProyectListInicio';

export const PrincipalProyecto = ({ data }) => {
    const navigate = useNavigate()


    return (

        <Container style={{ marginTop: '100px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                <Grid item spacing={12}>
                    <Typography variant="h3" gutterBottom >
                        CONOCE TODAS NUESTRAS CAMPAÑAS AQUÍ
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        style={{ minHeight: "400px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/donaciones-79b72.appspot.com/o/chico_agradecido.jpg?alt=media&token=fea79837-14d5-4e81-87f9-eb0fab939a3e" />

                </Grid>
                <Grid item xs={12} md={3}>
                    <ProyectListInicio />
                    <Box style={{ height: '100%', width: '100%' }}>
                        <Box style={{ margin: "0px auto" }}>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
