import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import FormularioDonar from './FormularioDonar'
import { METHOD, setting } from '../../settings/Settings';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';




export const CardDonar = ({ proyecto, id }) => {
  return (
    <>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} justifyContent="center"  >
                <Grid item xs={12}>
                    <Box className="w-full h-96 bg-[url('https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg')] bg-no-repeat bg-center">
                    </Box>
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
