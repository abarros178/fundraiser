import React from 'react'
import { Box, Card, CardContent, Container, Grid, Toolbar, Typography } from '@mui/material'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import ProyectoItemDonar from '../components/ProyectoItemDonar'
import { FooterProyectosDonar } from '../components/FooterProyectosDonar'
export const ListProyects = () => {

    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)

    return (
        <>
          
            <Container style={{marginTop:"20px"}}>
                <Grid item xs={12}>
                    <Card style={{ borderRadius: '5px', marginBottom: '10px', boxShadow: '5px gray solid' }}>
                        <CardContent>
                            <Typography variant='h5'>
                                Campañas
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {
                    loading ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
                        <LoaderNeoSoft />
                    </div>
                        :
                        <Grid container columnSpacing={2} rowSpacing={2}>
                            <>
                                {
                                    data.map((item, index) => (
                                        <Grid item xs={12} sm={4} md={4} key={index}>
                                            <ProyectoItemDonar data={item} />
                                        </Grid>
                                    ))
                                }
                            </>
                            <Grid item xs={12} >
                                <Box sx={{ height: "100%", width: "100%" }}>
                                    <FooterProyectosDonar />
                                </Box>
                            </Grid>
                        </Grid>
                }


            </Container>

        </>
    )
}

