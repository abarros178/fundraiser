import * as React from 'react';
import { Box, Grid, LinearProgress } from '@mui/material';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../../settings/Settings';
import { Statistic } from 'antd';
import moment from 'moment';
export default function CardInformacion({ proyecto }) {

    const { data } = useHttpRequestTwo(setting.reportes_metricas + proyecto.uid, METHOD.GET)
    //todo: mejorar la animacion de esta card
    console.log(new Date(proyecto.fecha_inicio))
    console.log(moment(proyecto.fecha_inicio).format('DD/MM/YYYY'))
    return (
        <Box padding={3} >
            <Grid container rowSpacing={6} columnSpacing={1}>
                <Grid item xs={6} sm={6} md={4} >
                    <Statistic title="Inicio el" value={moment(proyecto.fecha_inicio).format('DD/MM/YYYY')} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} >
                    <Statistic title="Finaliza el" value={moment(proyecto.fecha_objetivo).format('DD/MM/YYYY')} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} >
                    <Statistic title="Objetivo de financiación" value={proyecto.monto_meta} valueStyle={{ color: '#3f8600' }} />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <Statistic title="Fondos recaudados" value={data?.mongoAlcanzado} valueStyle={{ color: '#3f8600' }} />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <Statistic title="Días restantes" value={data?.diasFaltantes} valueStyle={{ color: data?.diasFaltantes < 10 ? "red" : '#3f8600' }} />
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <Statistic title="Porcentaje alcanzado" value={data?.procentajeAlcanzado + "%"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <LinearProgress variant="buffer" value={data?.procentajeAlcanzado | 0} valueBuffer={100} />
                </Grid>
            </Grid>
        </Box>
    );
}



