import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Space, Spin, Statistic, Tabs, Typography, Image, Carousel, Divider, Badge } from 'antd';
import { CardDonar, SobreProyecto } from '../components/CardDonar';
import FormularioDonar from '../components/FormularioDonar';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const AccionesProyectos = () => {
    const params = useParams("id")
    const { data=[], execute, loading,loadingComponent } = useHttpRequest(setting.proyecto_main + params.id, METHOD.GET)


    useEffect(() => {
        execute()
    }, [])

    return (
        <>
            {
                loadingComponent ?
                    <>
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                    </>
                    :
                    <>
                        <CardDonar proyecto={data} id={params}/>
                    </>
            }

        </>
    )
}
