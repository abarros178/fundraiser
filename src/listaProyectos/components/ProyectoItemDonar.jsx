import { EditOutlined, SettingsOutlined } from '@mui/icons-material'
import { Avatar, Card, Skeleton, Image, Space } from 'antd'
import Meta from 'antd/lib/card/Meta'
import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProyectoItemDonar = ({ loading, data }) => {
    const navigate = useNavigate()
    return (
        <Card
            hoverable
            onClick={() => navigate('/donar/proyecto/' + data.uid)}
            style={{
                width: 240,
            }}
            cover={<img alt="example" src={data.img} />}
        >
            <Skeleton loading={loading} avatar active style={{ height: '100%', marginBottom: '10px' }}>
                <Meta  style={{overflowWrap: "break-word"}} title={data.title} description="www.instagram.com" />
            </Skeleton>
        </Card>
    )
}
