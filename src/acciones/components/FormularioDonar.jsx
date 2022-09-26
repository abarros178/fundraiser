import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { useHttpRequestTwo } from '../../hooks/useHttpRequestTwo';
import { METHOD, setting } from '../../settings/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "../acciones.css"
import { formularioDonarValidation } from '../utils/validation';


const FormularioDonar = ({ proyecto, other }) => {
    const { data: medios_pagos } = useHttpRequestTwo(setting.objetos + "tipo/MEDIOPAGO", METHOD.GET)
    const { data: roles } = useHttpRequestTwo(setting.objetos + "/tipo/ROLES", METHOD.GET)


    const { formState, onInputChange, onResetForm } = useForm({
        nombre: "",
        tipo: "",
        monto_donacion: 0,
        medio_pago: ""
    })
    const { execute, loading } = useHttpRequest(setting.donaciones_main, METHOD.POST)
    const navigate = useNavigate()
    const [otroMonto, setOtroMonto] = useState(false);
    const [activeBoton, setactiveBoton] = useState({ uno: false, dos: false, tres: false, cuatro: false })
    const handleOtroMonto = () => {
        setactiveBoton({ uno: false, dos: false, tres: false, cuatro: false })
        setOtroMonto(!otroMonto);
        onInputChange({ target: { value: 0, name: 'monto_donacion' } })
    };


    const handledDonar = async () => {
        if (!formularioDonarValidation(formState)) return
        const res = await execute({ ...formState, proyecto, nombre: formState.nombre.length === 0 ? "Anonimo" : formState.nombre })
        if (res.statusCode === 201) {
            message.success("Se guardo con exito")
            onResetForm()
            navigate('/')
        } else {
            message.error("Ocurrio un problema al guardar.",)
        }

    }
    return (

        <>

            <Grid container width="100%">
                <Grid item xs={12} sm={3} md={3} margin={1} >
                    <Button
                        variant="contained"
                        sx={activeBoton.uno ? { fontSize: '18px', width: "100%", backgroundColor: "#6693bd" } : { fontSize: '18px', width: "100%" }}
                        className="w-28 h-24"
                        onClick={() => {
                            onInputChange({ target: { value: 20000, name: 'monto_donacion' } })
                            setactiveBoton({ uno: true, dos: false, tres: false, cuatro: false })
                        }}

                    >
                        $20.000 COP
                    </Button>

                </Grid>
                <Grid item xs={12} sm={3} md={3} margin={1}>
                    <Button
                        variant="contained"
                        sx={activeBoton.dos ? { fontSize: '18px', backgroundColor: "#6693bd", width: "100%" } : { fontSize: '18px', width: "100%" }}
                        className="w-28 h-24"
                        onClick={() => {
                            onInputChange({ target: { value: 50000, name: 'monto_donacion' } })
                            setactiveBoton({ uno: false, dos: true, tres: false, cuatro: false })
                        }}>
                        $50.000 COP
                    </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={3} margin={1}>
                    <Button
                        variant="contained"
                        sx={activeBoton.tres ? { fontSize: '18px', backgroundColor: "#6693bd", width: "100%" } : { fontSize: '18px', width: "100%" }}
                        className="w-28 h-24"
                        onClick={() => {
                            onInputChange({ target: { value: 80000, name: 'monto_donacion' } })
                            setactiveBoton({ uno: false, dos: false, tres: true, cuatro: false })
                        }}>
                        $80.000 COP
                    </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={3} margin={1}>
                    <Button
                        variant="contained"
                        sx={activeBoton.cuatro ? { fontSize: '18px', backgroundColor: "#6693bd", width: "100%" } : { fontSize: '18px', width: "100%" }}
                        className="w-28 h-24"
                        onClick={() => {
                            onInputChange({ target: { value: 100000, name: 'monto_donacion' } })
                            setactiveBoton({ uno: false, dos: false, tres: false, cuatro: true })
                        }}>
                        $100.000 COP
                    </Button>
                </Grid>
                <Grid item xs={12} sm={3} md={3} margin={1}>
                    <Button onClick={handleOtroMonto} variant="contained" sx={{ fontSize: '18px', width: "100%" }} className='w-28 h-24'>
                        Otro monto
                    </Button>
                </Grid>

                <Grid item xs={12} display="flex" >
                    {otroMonto ?
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AttachMoneyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField onChange={onInputChange} name='monto_donacion' value={formState.monto_donacion} id="input-with-sx" label="Otro monto" variant="standard" type="number" />
                                <Button onClick={handleOtroMonto} variant="contained" sx={{ fontSize: '14px' }} >
                                    X
                                </Button>
                            </Box>
                        </Grid>
                        :
                        <></>}
                </Grid>


            </Grid>
            <Grid container width="100%">
                <Grid item xs={12} marginTop={5}>
                    <form>
                        <Grid container >
                            <Grid item xs={12} sm={4} md={3} mr={2} margin={1}>
                                <TextField name='nombre' onChange={onInputChange} value={formState.nombre} fullWidth id="standard-basic" label="Nombre" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} mr={2} margin={1}>
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
                                    {roles?.map((option, index) => (
                                        <MenuItem  key={index} value={option.objeto.value}>
                                            {option.objeto.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} mr={2} margin={1}>
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
                                    SelectProps={{
                                        multiple: true,
                                        value: []
                                    }}

                                >
                                    {medios_pagos?.map((option, index) => (
                                        <MenuItem children key={index} value={option.objeto.value}>
                                            {option.objeto.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={4} md={3} mr={2} margin={1} >
                                    <Button onClick={handledDonar} variant="contained" size="large" disabled={loading}>
                                        Donar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>


        </>


    );
};

export default FormularioDonar;