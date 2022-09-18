import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { ProyectListInicio } from '../../proyecto/components/ProyectListInicio';
import { Collapse } from 'antd'
import { AboutUs } from './AboutUs';
const { Panel } = Collapse;

export const PrincipalProyecto = ({ data }) => {


    return (

        <Container style={{ marginTop: '50px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                <Grid item xs={12}>
                    <Paper>
                        <Collapse ghost >
                            <Panel header="¿Qué es crowdfunding?" key="1">
                                <Typography variant='body1'>El crowdfunding es una forma de recaudación de fondos digital, mediante la cual grupos de personas donan cantidades variables (y a menudo relativamente pequeñas) de dinero para apoyar un objetivo particular </Typography>
                            </Panel>
                            <Panel header="¿En qué consiste el Crowdfunding basado en recompensa?" key="2">
                                <Typography variant='body1'>El modelo de Crowdfunding basado en recompensas permite que las personas contribuyan a proyectos y reciban recompensas no financieras a cambio, como, por ejemplo, tarjetas de agradecimiento, menciones en la plataforma, saludos en redes sociales, entre otras.</Typography>
                            </Panel>
                            <Panel header="¿Cómo funcionan las campañas de Crowdfunding?" key="3">
                                <Typography variant='body1'>Las campañas de Crowdfunding para ayudar a los estudiantes en su graduación oportuna son impulsadas por la misma universidad y también pueden ser postuladas por los propios estudiantes quienes deben esperar la aprobación de la plataforma.
                                    <br /><br /> Por cualquier donación realizada la persona recibirá una pequeña recompensa no monetaria.</Typography>
                            </Panel>


                        </Collapse>
                    </Paper>
                </Grid>
                <Grid item xs={12} marginTop="50px">
                    <Typography variant="h4" gutterBottom >
                        CONOCE TODAS NUESTRAS CAMPAÑAS AQUÍ
                    </Typography>
                </Grid>

               
                <ProyectListInicio />
                
                <Grid item xs={12} marginTop="50px">
                    <Typography variant="h4" gutterBottom >
                        CONOCE A LAS PERSONAS QUE HICIERON ESTO REALIDAD
                    </Typography>
                </Grid>
                <AboutUs />


            </Grid>
        </Container >
    )
}
