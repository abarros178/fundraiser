import React, { useState } from 'react';
import { Box, Button, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useHttpRequest } from '../../hooks/useHttpRequest';
import { METHOD, setting } from '../../settings/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { medio_pago, roles } from '../utils/select';
import "../acciones.css"
import { formularioDonarValidation } from '../utils/validation';


const FormularioDonar = ({ proyecto }) => {
    //todo: Realizar validaciones de formulario, bloquear boton al gurdar
    const { formState, onInputChange, onResetForm } = useForm({
        nombre: "",
        tipo: "",
        monto_donacion: 0,
        medio_pago: ""
    })
    const { execute, loading, error, data, statusCode } = useHttpRequest(setting.donaciones_main, METHOD.POST)
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
            console.log(res.data);
            message.success("Se guardo con exito")
            onResetForm()
            navigate('/')
        } else {
            message.error("Ocurrio un problema al guardar.",)
        }

    }
    return (

        <>

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Registro de informacion
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
                                        sx={activeBoton.uno ? { fontSize: '18px',backgroundColor:"#6693bd" } : { fontSize: '18px' }}
                                        className="w-28 h-24"
                                        onClick={() => {
                                            onInputChange({ target: { value: 20000, name: 'monto_donacion' } })
                                            setactiveBoton({ uno: true, dos: false, tres: false, cuatro: false })
                                        }}

                                    >
                                        $20.000 COP
                                    </Button>

                                </Grid>
                                <Grid item mr={2}>
                                    <Button
                                        variant="contained"
                                        sx={activeBoton.dos ? { fontSize: '18px',backgroundColor:"#6693bd" } : { fontSize: '18px' }}
                                        className="w-28 h-24"
                                        onClick={() => {
                                            onInputChange({ target: { value: 50000, name: 'monto_donacion' } })
                                            setactiveBoton({ uno: false, dos: true, tres: false, cuatro: false })
                                        }}>
                                        $50.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button
                                        variant="contained"
                                        sx={activeBoton.tres ? { fontSize: '18px',backgroundColor:"#6693bd" } : { fontSize: '18px' }}
                                        className="w-28 h-24"
                                        onClick={() => {
                                            onInputChange({ target: { value: 80000, name: 'monto_donacion' } })
                                            setactiveBoton({ uno: false, dos: false, tres: true, cuatro: false })
                                        }}>
                                        $80.000 COP
                                    </Button>
                                </Grid>
                                <Grid item mr={2}>
                                    <Button
                                        variant="contained"
                                        sx={activeBoton.cuatro ? { fontSize: '18px',backgroundColor:"#6693bd" } : { fontSize: '18px' }}
                                        className="w-28 h-24"
                                        onClick={() => {
                                            onInputChange({ target: { value: 100000, name: 'monto_donacion' } })
                                            setactiveBoton({ uno: false, dos: false, tres: false, cuatro: true })
                                        }}>
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
                            <Grid container >
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
                                    <Button onClick={handledDonar} variant="contained" size="large" disabled={loading}>
                                        Donar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid >

        </>


    );
};

export default FormularioDonar;