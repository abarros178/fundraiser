import React from 'react'
import { HeaderInicio } from '../components/carrousel/CarrouselList.jsx'
import { Container, Grid, Typography } from '@mui/material'
import { ProyectListInicio } from '../components/carrouselProyectos/ProyectListInicio.jsx'
import { AboutUs } from '../components/aboutUs/AboutUs.jsx'
import { Informacion } from '../components/informacion/Informacion.jsx'
import Contactus from '../components/Contactus.jsx'
import "../components/inicio.css"
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo.jsx'
import { METHOD, setting } from '../../settings/Settings.js'
import { LoaderNeoSoft } from '../../components/LoaderNeoSoft.jsx'

const Inicio = () => {
  const { data, loading } = useHttpRequestTwo(setting.objetos + "/tipo/carrousel", METHOD.GET)


  return (
    <>


      {
        loading ?
          

            <LoaderNeoSoft />
          
          :

          <>
            <Container maxWidth="100%">
              <Grid item xs={12}>
                <HeaderInicio data={data} />
              </Grid>
            </Container>
            <Container >
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

              <Grid item xs={12} marginTop='50px'  id="acercade">
                <AboutUs />
              </Grid>


              <Grid item xs={12} marginTop='50px'  id="contactanos">
                <Contactus />
              </Grid>


            </Container>
          </>
      }

    </>
  )
}

export default Inicio