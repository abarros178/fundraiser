import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { ProyectListInicio } from '../../proyecto/components/ProyectListInicio';
import { Collapse } from 'antd'
const { Panel } = Collapse;

export const PrincipalProyecto = ({ data }) => {


    return (

        <Container style={{ marginTop: '50px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                <Grid item xs={12}>
                    <Paper>
                    <Collapse ghost >
                        <Panel header="¿Qué es crowdfunding?" key="1">
                            <Typography variant='body1'>Es un modelo de financiación colectiva en la que todo el mundo puede donar sumas de dinero (sin importar qué tan grandes o pequeñas sean) para ayudar a una causa común; es hacer vaca por internet.

                                Hay varios modelos de crowdfunding, pero el nuestro es el modelo de donación con posibilidad de recompensa. Este modelo es legal en Colombia, pues se trata de un contrato de donación con destinación específica que hacemos entre los donantes y DxE (auspiciada por Fundación Help).</Typography>
                        </Panel>
                        <Panel header="¿Cómo funciona el crowdfunding?" key="2">
                            <Typography variant='body1'>Una persona que esté interesada en financiar algún proyecto debe enviarlo para aprobación de la plataforma y, una vez sea validado por esta, debe publicarlo y promocionarlo lo más que pueda con sus contactos, amigos y desconocidos para que ellos se motiven a apoyarlo. Crear comunidad es fundamental para recolectar recursos.</Typography>
                        </Panel>

                        </Collapse>
                    </Paper>
                </Grid>
                <Grid item xs={12} marginTop="50px">
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
            <Grid item xs={12} md={6}>
                <ProyectListInicio />
            </Grid>

        </Grid>
        </Container >
    )
}
