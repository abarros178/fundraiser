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
            <Row justify="center" >
                <Card>
                    <Card.Grid hoverable={false} style={{
                        width: '50%',
                        textAlign: 'center',
                    }}>
                        {
                            data && <SobreProyecto data={data} /> 
                        }
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={{
                        width: '50%',
                        textAlign: 'center',
                    }}>
                        <Donar/>
                    </Card.Grid>
                </Card>
            </Row>

        </>
    )
}
