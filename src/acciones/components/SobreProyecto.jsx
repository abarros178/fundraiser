import { Col, Row, Space, Typography, Image, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft'
const { Title } = Typography
export const SobreProyecto = ({ data }) => {
  return (
    <section className="text-gray-600 body-font">
      {/* <Row>
        <Col span={24}>
          <Title level={2}>{data?.title}</Title>

        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Space size={12}>
            <Image alt="hero" src={data?.img !== "none" ? data.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"} preview={false} />
          </Space>
        </Col>
      </Row> */}
      <Card
        hoverable
        style={{
          width: 600,
        }}
        cover={<img alt="example" src={data?.img !== "none" ? data.img : "https://www.cuc.edu.co/wp-content/uploads/2021/07/se-parte-familia-unicosta-estudiantes.jpg"} />}
      >
        <Meta title={data?.title}  /* description="www.instagram.com" */ />
      </Card>
    </section>
  )
}
