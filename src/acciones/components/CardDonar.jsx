
import { Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ProyectoItemDonar from '../../listaProyectos/components/ProyectoItemDonar'
import CardVertical from './CardVerticcal'
import FormularioDonar from './FormularioDonar'





export const CardDonar = ({ proyecto, id }) => {
  //todo: Realizar loader al banner con skeleton
  return (
    <>
      {/* <Container maxWidth="100%" >
        <Grid item>
          <img src={proyecto.img} alt="img" loading='' />
        </Grid>
      </Container> */}
      <Container maxWidth="90%">
        <Grid container>
          <Toolbar />

          <Grid item xs={12} >
            <Typography variant="h2" mb={4} gutterBottom
              fontSize={{ xs: 40, sm: 60 }}
            >
              {proyecto.title}
            </Typography>
          </Grid>

        </Grid>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item >
            <FormularioDonar proyecto={id} other={proyecto.other} />
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
