
import { Box, Container, Divider, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ProyectoItemDonar from '../../listaProyectos/components/ProyectoItemDonar'
import CardInformacion from './CardInformacion'
import FormularioDonar from './FormularioDonar'





export const CardDonar = ({ proyecto, id }) => {
  console.log(proyecto)
  //todo: Realizar loader al banner con skeleton
  return (
    <>
     
      <Container maxWidth="xl">
        <Grid container>
          <Toolbar />

          <Grid item xs={12} >
            <Typography variant={"h1"} mb={4} gutterBottom
              fontSize={{ xs: 40, sm: 60 }}
            >
              {proyecto.title}
            </Typography>
          </Grid>

        </Grid>


        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={12} md={6} className="esconder">
                <Grid container>
                  <Grid item xs={12}>
                    <img
                      className="bordeimagen"
                      alt="hero"
                      src={proyecto.other.img_c} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CardInformacion proyecto={proyecto} />
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={2}>
          <Grid item xs={12}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={12} md={6}>
                <Grid container rowSpacing={2}>
                  <Grid item paddingX={5}>

                    <Typography variant='h4'>
                      Historia de la campaña
                    </Typography>


                  </Grid>
                  <Grid item padding={5}>
                    {proyecto.other.historia.map((item) => (
                      <Typography variant='body1'>
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormularioDonar proyecto={id} other={proyecto.other} />
              </Grid>


            </Grid>
          </Grid>
        </Grid>


      </Container>

      {/* 
      <div style={{ backgroundColor: 'white', borderTopLeftRadius: "25px"}}>
        <Row >
          <Col xs={24} sm={24} md={10} lg={10} >
            <div style={{ borderTopLeftRadius: "25px", backgroundPosition: 'center', height: '100%', backgroundImage: `url(${proyecto?.img !== "none" ? proyecto.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
            </div>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} >
            <div style={{ marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <Typography.Title>{proyecto.title}</Typography.Title>
              </div>
            </div>
            <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
              <Divider />
              <FormularioDonar proyecto={id} />
            </div>
          </Col>
        </Row>
      </div> */}
    </>

  )
}
