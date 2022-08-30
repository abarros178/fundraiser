import { Card, Cascader, Col, Row, Space, Typography } from 'antd'
import Input from 'antd/lib/input/Input'
import React from 'react'
import FormularioDonar from './FormularioDonar'
const { Title } = Typography
export const Donar = () => {
  return (
    <>


      <Card hoverable title="Llene el formulario para registrar su donacion" >
        <Col span={24}>
          <FormularioDonar />
        </Col>
      </Card>




    </>
  )
}
