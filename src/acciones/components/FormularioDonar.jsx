import React, { useState } from 'react';
import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { medio_pago, roles } from '../utils/select';


const FormularioDonar = ({ proyecto }) => {
    const [otroMonto, setOtroMonto] = useState(false);
    const handleOtroMonto = () => {
        setOtroMonto(!otroMonto);
    };

    const { formState, onInputChange, onResetForm } = useForm({
        nombre: "",
        tipo: "",
        monto_donacion: 0,
        medio_pago: ""
    })

    const navigate = useNavigate()
    const { execute, loading, error, data, statusCode } = useHttpRequest(setting.donaciones_main, METHOD.POST)

    const handledDonar = async () => {
        const res = await execute({ ...formState, proyecto, nombre: formState.nombre.length === 0 ? "Anonimo" : formState.nombre })
        console.log(res)
        if (res.statusCode === 201) {
            message.success("Se guardo con exito")
            onResetForm()
            setTimeout(() => {
                navigate('/')
            }, 1000);
        } else {
            message.error("Ocurrio un problema al guardar.",)
        }

    }
    return (

        <>

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Gift amount
                        <Divider className='w-full bg-black' />
                    </Typography>
                    <Grid container my={3} >
                        {otroMonto ?
                            <Grid item mr={2}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <AttachMoneyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField onChange={onInputChange} name='monto_donacion' value={formState.monto_donacion} id="input-with-sx" label="Otro monto" variant="standard" type="number" />
                                    <Button onClick={handleOtroMonto} variant="contained" sx={{ fontSize: '14px' }} >
                                        X
                                    </Button>
                                </Box>
                            </Grid>
                            :
                            <>
                                <Grid item mr={2}>
                                    <Button
                                        variant="contained"
                                        sx={{ fontSize: '18px' }}
                                        className='w-28 h-24'
                                        onClick={() => onInputChange({ target: { value: 20000, name: 'monto_donacion' } })}
                                    >
                                        $20.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button variant="contained" sx={{ fontSize: '18px' }} className='w-28 h-24 ' onClick={() => onInputChange({ target: { value: 50000, name: 'monto_donacion' } })}>
                                        $50.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button variant="contained" sx={{ fontSize: '18px' }} className='w-28 h-24' onClick={() => onInputChange({ target: { value: 80000, name: 'monto_donacion' } })}>
                                        $80.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button variant="contained" sx={{ fontSize: '18px' }} className='w-28 h-24' onClick={() => onInputChange({ target: { value: 100000, name: 'monto_donacion' } })}>
                                        $100.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button onClick={handleOtroMonto} variant="contained" sx={{ fontSize: '18px' }} className='w-28 h-24'>
                                        Otro monto
                                    </Button>
                                </Grid>
                            </>}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            Donor information
                            <Divider className='w-full bg-black' />
                        </Typography>
                        <form>
                            <Grid container xs={12} >
                                <Grid item xs={6} mr={3} >
                                    <TextField name='nombre' onChange={onInputChange} value={formState.nombre} fullWidth id="standard-basic" label="Nombre" variant="standard" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name='tipo'
                                        onChange={onInputChange}
                                        value={formState.tipo}
                                        fullWidth
                                        id="standard-select-currency"
                                        select
                                        label="Es usted"
                                        helperText="Por favor selecciona"
                                        variant="standard"
                                    >
                                        {roles.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4} mb={2}>
                                    <TextField
                                        value={formState.medio_pago}
                                        name='medio_pago'
                                        onChange={onInputChange}
                                        fullWidth
                                        id="standard-select-currency"
                                        select
                                        label="Medio de pago"
                                        helperText="Por favor selecciona"
                                        variant="standard"
                                    >
                                        {medio_pago.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button onClick={handledDonar} loading={loading} variant="contained" size="large">
                                        Donar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid >

            {/* <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="nombre" style={{
                            lineHeight: "130%", fontSize: "12px", color: "black",
                        }}>Nombre</label>
                        <Input placeholder='Deje vacio para ser anonimo' name='nombre' onChange={onInputChange} value={formState.nombre} />
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

            <Button style={{ margin: "10px 0px" }} type='primary' ghost onClick={handledDonar} loading={loading}>Donar</Button> */}
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