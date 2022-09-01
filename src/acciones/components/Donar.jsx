import { Card, Cascader, Col, Row, Space, Typography } from 'antd'
import Input from 'antd/lib/input/Input'
import React from 'react'
import FormularioDonar from './FormularioDonar'
const { Title,Text } = Typography
export const Donar = () => {
  return (
    <>

      <Row>
        <Title level={1}>Llene el formulario</Title>
        <Col span={24}>
          <FormularioDonar />
        </Col>
      </Row>




    </>
  )
}
