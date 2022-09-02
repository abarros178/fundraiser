import { Col, Row, Typography, Divider, Statistic, Space, Spin } from 'antd'
import React, { useEffect } from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import FormularioDonar from './FormularioDonar'
import { METHOD, setting } from '../../settings/Settings';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { useParams } from 'react-router-dom';
const { Title } = Typography

export const CardDonar = ({ proyecto, id }) => {
  const { data, loading } = useHttpRequest(setting.donaciones_main + id, METHOD.GET)
  console.log(loading);
  return (
    <>


      <div style={{ backgroundColor: 'white', borderTopLeftRadius: "25px" }}>
        <Row >
          <Col xs={24} sm={24} md={10} lg={10} >
            <div style={{ borderTopLeftRadius: "25px", backgroundPosition: 'center', height: '100%', backgroundImage: `url(${proyecto?.img !== "none" ? proyecto.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} >
            <div style={{ marginTop: '10px' }}>
              <Typography.Title style={{
                position: "relative",
                left: "40px"
              }}>{proyecto.title}</Typography.Title>
              {
                loading ?
                  <>
                    <Space size="middle">
                      <Spin size="large" />
                    </Space>
                  </>
                  :
                  <>
                    <Statistic
                      style={{
                        position: "relative",
                        left: "40px"
                      }}
                      title="Donaciones"
                      value={data ? data.lenght : 0}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                    />
                  </>
              }

            </div>
            <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
              <Divider />
              <FormularioDonar />
            </div>
          </Col>
        </Row>
      </div>
    </>

  )
}
