import { Paper, Typography } from '@mui/material'
import { Collapse } from 'antd'
import React from 'react'
const { Panel } = Collapse;
export const Informacion = () => {
    return (
        <Paper>
            <Collapse ghost >
                <Panel header="¿Qué es crowdfunding?" key="1">
                    <Typography variant='body1'>El crowdfunding es una forma de recaudación de fondos digital, mediante la cual grupos de personas donan cantidades variables (y a menudo relativamente pequeñas) de dinero para apoyar un objetivo particular </Typography>
                </Panel>
                <Panel header="¿En qué consiste el Crowdfunding basado en recompensa?" key="2">
                    <Typography variant='body1'>El modelo de Crowdfunding basado en recompensas permite que las personas contribuyan a proyectos y reciban recompensas no financieras a cambio, como por ejemplo reconocimiento a través de las redes sociales, en las plataformas del proyecto, en las redes de graduados, entre otras.
                    </Typography>
                </Panel>
                <Panel header="¿Cómo funcionan las campañas de Crowdfunding?" key="3">
                    <Typography variant='body1'>Las campañas de Crowdfunding de nuestra plataforma tienen como objetivo principal apoyar a los estudiantes de pregrado en su graduación oportuna; estas son postuladas por la universidad o por los estudiantes al enviar su solicitud a través del módulo de CONTÁCTANOS donde serán analizadas por nuestro equipo.</Typography>
                </Panel>


            </Collapse>
        </Paper>
    )
}
