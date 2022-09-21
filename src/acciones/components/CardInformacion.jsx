import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../../settings/Settings';
export default function CardInformacion({ proyecto }) {

    const { data } = useHttpRequestTwo(setting.reportes_metricas + "/" + proyecto.uid, METHOD.GET)
    //todo: mejorar la animacion de esta card
    console.log(setting.reportes_metricas + proyecto.uid)
    return (
        <Card sx={{
            maxWidth: 300, minHeight: "100%", minWidth: "100%",
        }}>
            <CardContent>


                <Grid container columnSpacing={2} rowSpacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ border: 1, padding: 5 }}>
                            <Typography variant="body1" color="text.secondary">
                                {proyecto.other.historia}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ border: 1, padding: 5 }}>
                            <Typography variant="body1" color="text.secondary">
                                Objetivo de financiación:  {proyecto.monto_meta}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Fondos recaudados:  {data?.mongoAlcanzado}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Días para terminar la campaña:  {data?.diasFaltantes}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Porcentaje alcanzado:  {(parseFloat(data?.mongoAlcanzado + "") / parseFloat(proyecto.monto_meta + "")) * 100}%
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>


            </CardContent>

        </Card >
    );
}



