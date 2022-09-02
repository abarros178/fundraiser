import { Col, Row, Typography, Divider, Statistic, Space, Spin } from 'antd'
import React from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import FormularioDonar from './FormularioDonar'
import { METHOD, setting } from '../../settings/Settings';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';



export const CardDonar = ({ proyecto, id }) => {
  const { data=[], loading } = useHttpRequestTwo(setting.donaciones_main , METHOD.GET)
  console.log(data);
  return (
    <>


      <div style={{ backgroundColor: 'white', borderTopLeftRadius: "25px" }}>
        <Row >
          <Col xs={24} sm={24} md={10} lg={10} >
            <div style={{ borderTopLeftRadius: "25px", backgroundPosition: 'center', height: '100%', backgroundImage: `url(${proyecto?.img !== "none" ? proyecto.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} >
            <div style={{ marginTop: '10px', paddingBottom: '10px' }}>
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
                      value={data.length}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                    />
                  </>
              }

            </div>
            <div style={{ padding: '0px 50px', marginBottom: '10px' }}>
              <Divider />
              <FormularioDonar proyecto={id} />
            </div>
          </Col>
        </Row>
      </div>
    </>

  )
}
