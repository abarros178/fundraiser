import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Col, Row, Space, Tabs } from 'antd';
import { SobreProyecto } from '../components/SobreProyecto';
import { Donar } from '../components/Donar';


export const AccionesProyectos = () => {
    const params = useParams("id")
    console.log(params);
    const { data, execute, loading } = useHttpRequest(setting.proyecto_main + params.id, METHOD.GET)
    console.log(data);
    useEffect(() => {
        execute()
    }, [])

    return (
        <>
            <Row>
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <SobreProyecto />

                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Donar />
                </Col>
            </Row>
        </>
    )
}
