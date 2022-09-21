import React from 'react'
import { HeaderInicio } from '../components/carrousel/CarrouselList.jsx'
import { METHOD, setting } from '../../settings/Settings.js'
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { ProyectListInicio } from '../components/carrouselProyectos/ProyectListInicio.jsx'
import { AboutUs } from '../components/aboutUs/AboutUs.jsx'
import { Informacion } from '../components/informacion/Informacion.jsx'


const Inicio = () => {

  return (
    <>
      <Container maxWidth="100%">
        <Grid item xs={12}>
          <HeaderInicio />
        </Grid>
      </Container>
      <Container>
        <Grid item xs={12} marginTop='50px'>
          <Informacion />
        </Grid>

        <Grid item xs={12} marginTop='50px'>
          <Typography variant="h4" gutterBottom >
            CONOCE TODAS NUESTRAS CAMPAÑAS AQUÍ
          </Typography>
        </Grid>

        <Grid item xs={12} marginTop='50px'>
          <ProyectListInicio />
        </Grid>

        <Grid item xs={12} marginTop='50px'>
          <Typography variant="h4" gutterBottom >
            CONOCE A LAS PERSONAS QUE HICIERON ESTO REALIDAD
          </Typography>
        </Grid>

        <Grid item xs={12} marginTop='50px' >
          <AboutUs />
        </Grid>


      </Container>
    </>
  )
}

export default Inicio