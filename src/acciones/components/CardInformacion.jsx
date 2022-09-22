import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../../settings/Settings';
import { Statistic } from 'antd';
import { LinearProgress } from '@mui/material';
export default function CardInformacion({ proyecto }) {

    const { data } = useHttpRequestTwo(setting.reportes_metricas + "/" + proyecto.uid, METHOD.GET)
    //todo: mejorar la animacion de esta card
    console.log(setting.reportes_metricas + proyecto.uid)
    return (
        <Box padding={5} >
            <Grid container rowSpacing={6} >
                <Grid item xs={12} sm={6} md={6} >
                    <Statistic title="Objetivo de financiación" value={proyecto.monto_meta} valueStyle={{ color: '#3f8600' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Statistic title="Fondos recaudados" value={data?.mongoAlcanzado} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Statistic title="Días restantes" value={data?.diasFaltantes} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Statistic title="Porcentaje alcanzado" value={data?.procentajeAlcanzado +"%"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <LinearProgress variant="buffer" value={data?.procentajeAlcanzado} valueBuffer={100} />
                </Grid>
            </Grid>
        </Box>
    );
}



