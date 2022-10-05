import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';
export const ProyectItem = ({ proyecto }) => {

    const navigate = useNavigate()
    return (

        <>
            <Card
                sx={{
                    minWidth: "100%", minHeight: "100%", "&:hover": {
                        boxShadow: "#e9e9e9 0px 20px 20px 0px",
                        cursor: "pointer"
                    }
                }}
                onClick={() => navigate("/donar/proyecto/" + proyecto.uid)}
                hover="true"
            >
                <CardContent sx={{ padding: "10px", height: "100%" }}>
                    <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} rowSpacing={3}>
                        <Grid item xs={12} md={6}>
                            <Grid container sx={{ width: "100%", height: "100%"}} paddingX={2}>
                                <Grid item xs={12}>
                                    <Box style={{ alignSelf: "flex-start", width: "80%" }} marginTop={{xs:2,md:2}}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {proyecto.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {proyecto.descripcion}
                                        </Typography>

                                    </Box>
                                </Grid>
                                <Grid item xs={12} display="flex" marginTop={3}>
                                    <Box alignSelf="flex-end" width="100%">
                                        <Button
                                            variant='outlined'
                                            color='primary'
                                            style={{ width: "100%", bottom: "0px", alignSelf: "flex-end" }}
                                            onClick={() => navigate("/donar/proyecto/" + proyecto.uid)}
                                        >Donar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item xs={12} md={6} className="esconder">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={proyecto.other.img_c} />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>



        </>
    )
}
