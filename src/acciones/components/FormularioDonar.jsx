import {
    Button,
    Card,
    Cascader,
    Checkbox,
    Col,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Row,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import Title from 'antd/lib/skeleton/Title';
import React, { useState } from 'react';
import { ButtonNeoSoft } from '../../components/ButtonNeoSoft';

const FormularioDonar = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (

        <>
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Name" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Nombre</label>
                        <Input placeholder='Digite el nombre'  />
                        <Checkbox>Soy anonimo</Checkbox>
                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Name" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Nombre</label>
                        <Select>
                            <Select.Option value="graduado">Graduado</Select.Option>
                            <Select.Option value="estudiante">Estudiante</Select.Option>
                            <Select.Option value="profesor">Profesor</Select.Option>
                            <Select.Option value="otro">Otro</Select.Option>
                        </Select>

                    </div>
                </Col>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="Name" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Cuanto va a donar</label>
                        <Input type="number" />

                    </div>
                </Col>
            </Row>
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