import {
    Alert,
    Button,
    Col,
    Input,
    Row,
    Select,
    message
} from 'antd';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';

const FormularioDonar = ({ proyecto }) => {

    const { formState, onInputChange, onResetForm } = useForm({
        nombre: "",
        tipo: "",
        monto_donacion: 0,
        medio_pago: null
    })

    const navigate = useNavigate()
    const { execute, loading, error, data } = useHttpRequest(setting.donaciones_main, METHOD.POST)
    const handledDonar = async () => {
        await execute({ ...formState, proyecto, nombre: formState.nombre.length === 0 ? "Anonimo" : formState.nombre });
        if(data){

        }
        if (!error  ) {
            message.success("Se guardo con exito")
        } else {
            message.error("Ocurrio un problema al guardar.",)
        }
        onResetForm()
        setTimeout(() => {
            navigate('/')
        }, 1000);
    }
    return (

        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="nombre" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Nombre</label>
                        <Input placeholder='Deje vacio para ser anonimo' name='nombre' onChange={onInputChange} value={formState.nombre} />
                        {/* <Checkbox>Soy anonimo</Checkbox> */}
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="tipo" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Es usted</label>
                        <Select value={formState.tipo} onChange={(e) => onInputChange({ target: { value: e, name: 'tipo' } })}>
                            <Select.Option value="graduado">Graduado</Select.Option>
                            <Select.Option value="estudiante">Estudiante</Select.Option>
                            <Select.Option value="profesor">Profesor</Select.Option>
                            <Select.Option value="otro">Otro</Select.Option>
                        </Select>

                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="monto_donacion" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Cuanto va a donar</label>
                        <Input value={formState.monto_donacion} type="number" name='monto_donacion' onChange={onInputChange} />

                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Name" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Medio de pago</label>
                        <Select onChange={(e) => onInputChange({ target: { value: e, name: 'medio_pago' } })} value={formState.medio_pago}>
                            <Select.Option value="Credito">Credito</Select.Option>
                            <Select.Option value="Nequi">Nequi</Select.Option>
                            <Select.Option value="Trasnferencia bancaria">Trasnferencia bancaria</Select.Option>
                            <Select.Option value="Paypal">Paypal</Select.Option>
                        </Select>

                    </div>
                </Col>
            </Row>

            <Button style={{ margin: "10px 0px" }} type='primary' ghost onClick={handledDonar} loading={loading}>Donar</Button>
        </>

        // <Form
        //     labelCol={{
        //         span: 4,
        //     }}
        //     wrapperCol={{
        //         span: 14,
        //     }}
        //     layout="horizontal"
        //     initialValues={{
        //         size: componentSize,
        //     }}
        //     onValuesChange={onFormLayoutChange}
        //     size={'large'}

        // >

        //     <Form.Item label="Nombre">
        //         <Input />
        //         <Checkbox>Anonimo?</Checkbox>
        //     </Form.Item>
        //     <Form.Item label="Ustes es">
        //         <Select>
        //             <Select.Option value="graduado">Graduado</Select.Option>
        //             <Select.Option value="estudiante">Estudiante</Select.Option>
        //             <Select.Option value="profesor">Profesor</Select.Option>
        //             <Select.Option value="otro">Otro</Select.Option>
        //         </Select>
        //     </Form.Item>
        //     <Form.Item label="Cuanto va a donar">
        //         <Input type="number" />
        //     </Form.Item>
        //     <Form.Item label="Medio de pago">
        //         <Select>
        //             <Select.Option value="tarjeta_credito">Tarjeta de credito</Select.Option>
        //             <Select.Option value="tarjeta_debito">Tarjeta de debito</Select.Option>
        //             <Select.Option value="paypal">Paypal</Select.Option>
        //             <Select.Option value="nequi">Nequi</Select.Option>
        //             <Select.Option value="otro">Otro</Select.Option>
        //         </Select>
        //     </Form.Item>
        //     <Form.Item >
        //         <ButtonNeoSoft type={2} label="Guardar"></ButtonNeoSoft>
        //     </Form.Item>
        // </Form>
    );
};

export default FormularioDonar;