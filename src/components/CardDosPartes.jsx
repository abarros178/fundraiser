import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardDosPartes = ({ redireccion, img, title, descripcion, titleButton = "" }) => {
    const navigate = useNavigate()
    return (
        <Card
            sx={{
                minWidth: "20%", minHeight: "100%", "&:hover": {
                    boxShadow: "#e9e9e9 0px 20px 20px 0px",
                    cursor: "pointer"
                }
            }}
            onClick={() => navigate(redireccion)}
            hover="true"
        >
            <CardContent sx={{ padding: "10px", height: "100%" }}>
                <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} rowSpacing={2} height="100%">
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                        <Grid container style={{ height: "100%" }}>
                            <Grid item xs={12} style={{ height: "90%",}} padding={10}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    {descripcion}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ height: "10%" }}>
                                <Box sx={{ display: "flex", alignContent: "end", justifyContent: "flex-end" }}>
                                    {
                                        titleButton.length > 0 && <Button
                                            variant='outlined'
                                            color='primary'
                                            style={{ width: "100%" }}
                                            onClick={() => navigate(redireccion)}
                                        >{titleButton}
                                        </Button>
                                    }

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className="esconder">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={img} />

                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}
