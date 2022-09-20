import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo'
import { METHOD, setting } from '../../settings/Settings'
import ProyectoItemDonar from '../components/ProyectoItemDonar'
import { FooterProyectosDonar } from '../components/FooterProyectosDonar'
export const ListProyects = () => {

    const { data = [], loading } = useHttpRequestTwo(setting.proyecto_main, METHOD.GET)

    return (
        <Grid container>

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
                    <Grid item xs={12}>
                        <Grid container>
                            <>
                                {
                                    data.map((item, index) => (
                                        <Grid item style={{ margin: 5 }} key={index}>
                                            <ProyectoItemDonar data={item} />
                                        </Grid>
                                    ))
                                }
                            </>
                        </Grid>
                    </Grid>
            }

            <Grid item xs={12} height="400px">
                <FooterProyectosDonar />
            </Grid>
        </Grid>

    )
}

