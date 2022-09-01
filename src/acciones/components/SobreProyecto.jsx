import { Col, Row, Space, Typography, Image, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft'
const { Title } = Typography
export const SobreProyecto = ({ data }) => {
  return (
    <>
      <Title level={1}>Llene el formulario</Title>
      <img alt="example" style={{}} src={data?.img !== "none" ? data.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"} />
    </>

  )
}
