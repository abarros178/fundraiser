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
  const { data, loading, error } = useHttpRequestTwo(setting.proyecto_main + "6317964e7e4794ccd1192cef", METHOD.GET)
  return (
    <>

      {
        error ?
          <h1>Lo sentimos, ocurrio un problema al cargar la pagina, intentelo de nuevo</h1>
          :
          <>
            {
              loading ?
                <LoaderNeoSoft />
                :
                (<>
                  <Container style={{ marginTop: '50px', padding:"0px" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                      <Grid item xs={12}>
                        <HeaderInicio />
                      </Grid>
                      <Grid item xs={12}>
                        <Informacion />
                      </Grid>

                      <Grid item xs={12} marginTop="50px">
                        <Typography variant="h4" gutterBottom >
                          CONOCE TODAS NUESTRAS CAMPAÑAS AQUÍ
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <ProyectListInicio />
                      </Grid>

                      <Grid item xs={12} marginTop="50px">
                        <Typography variant="h4" gutterBottom >
                          CONOCE A LAS PERSONAS QUE HICIERON ESTO REALIDAD
                        </Typography>
                      </Grid>

                      <Grid item xs={12} marginTop="50px">
                        <AboutUs />
                      </Grid>

                    </Grid>
                  </Container>

                </>)

            }

          </>
      }




    </>
  )
}

export default Inicio