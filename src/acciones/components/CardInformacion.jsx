import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
export default function CardInformacion({ data }) {
    const navigate = useNavigate()
    //todo: mejorar la animacion de esta card
    return (
        <Card sx={{
            maxWidth: 300, minHeight: "100%", minWidth: "100%",
        }}>
            <CardContent>
                <Grid container columnSpacing={2} rowSpacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ border: 1, padding: 5 }}>
                            <Typography variant="body1" color="text.secondary">
                                {data.other.historia}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box sx={{ border: 1, padding: 5 }}>
                            <Typography variant="body1" color="text.secondary">
                                {data.other.historia}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>

        </Card >
    );
}



