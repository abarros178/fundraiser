import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FormularioDonar from './FormularioDonar'





export const CardDonar = ({ proyecto, id }) => {
  //todo: Realizar loader al banner con skeleton
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} justifyContent="center"  >
          <Grid item xs={12}>
            <img src={proyecto.img} alt="img"/>
          </Grid>
          <Grid container xs={8} my={5} >
            <Grid item xs={12} >
              <Typography variant="h2" mb={4} gutterBottom>
                {proyecto.title}
              </Typography>
              <Typography variant="subtitle1" >
                {proyecto.descripcion}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <FormularioDonar proyecto={id} />
          </Grid>
        </Grid>
      </Box>


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
