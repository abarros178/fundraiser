import React, { useEffect } from 'react'
import { useHttpRequest } from '../../hooks/useHttpRequest'
import { METHOD, setting } from '../../settings/Settings'
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Space, Tabs } from 'antd';
import { SobreProyecto } from '../components/SobreProyecto';
import { Donar } from '../components/Donar';
import { PrincipalProyecto } from '../../Inicio/components/PrincipalProyecto';


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
            <Row  justify="center" gutter={[16,16]} style={{padding:'initial'}}>
                <Col span={10}>
                    {
                        data && <SobreProyecto data={data} />

                    }
                </Col>
                <Col span={13}>
                    <Donar />
                </Col>
            </Row>

        </>
    )
}