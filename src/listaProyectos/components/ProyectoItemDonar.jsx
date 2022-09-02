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
            onClick={() => navigate('/donar/proyecto/'+data.uid)}
            style={{ width: '100%', height: "200px", display: 'flex', padding: '10px' }}
        >
            <Skeleton loading={loading} avatar active style={{ height: '100%', marginBottom: '10px' }}>
                <Meta
                    style={{ display: 'flex' }}
                    avatar={<Avatar
                        size={40}
                        icon={<Image
                            preview={false}
                            src={"https://ws.desarrollo.eds.terpel.sclbox.com/2/grupo/defaultCategory.png"}
                            fallback="https://ws.desarrollo.eds.terpel.sclbox.com/2/grupo/defaultCategory.png"
                        />
                        }
                    />}
                    title={data.title}
                />
                <div style={{ marginTop: '10px' }}>
                    {/* <p style={{justifyContent: 'center',display: 'flex'}}>{data.descripcion}</p>  */}
                    <p>{data.descripcion}</p>
                    <p>{`Creada el: ${new moment(data.fecha_inicio).format('MMM d, YYYY')}`}</p>

                    <div style={{ position: 'absolute', bottom: 20 }} >
                        <SettingsOutlined key="setting" onClick={() => console.log('first')} />
                        <EditOutlined key="edit" onClick={() => console.log('first')} />
                    </div>
                </div>
            </Skeleton>

        </Card>
    )
}
