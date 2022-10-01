import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startCreateUserWithEmailPassword } from '../../store/slices/auth/thunks'

const formData = {
  email: 'ejemplo@gmail.com',
  password: '123456',
  displayName: 'ejemplo'
}

const formValidations = {
  email: [(value) => value.includes('@'), "El correo debe tener un @"],
  password: [(value) => value.length >= 6, "La contraseña debe tener minimo 6 caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
}








export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isformValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()

  const onsubmit = (event => {
    event.preventDefault();
    setFormSubmitted(true)
    console.log(isformValid)
    if (!isformValid) return;

    dispatch(startCreateUserWithEmailPassword(formState))
  })

  return (
    <>
      <AuthLayout title='Register'>
        <form>
          <Grid
            container
          >

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Luis Fernando'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={formSubmitted && displayNameValid}
              >

              </TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='example@email.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={formSubmitted && emailValid}
              >

              </TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='password'
                type='password'
                placeholder='********'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={formSubmitted && passwordValid}
              >

              </TextField>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
              <Grid item xs={12} md={6} sx={{ mt: 1 }} >
                <Button
                  onClick={onsubmit}
                  variant='contained'
                  fullWidth
                  md={6}
                  xs={12} >
                  <Typography sx={{ ml: 1 }}>
                    Crear cuenta
                  </Typography>
                </Button>
              </Grid>


            </Grid>
            <Grid container justifyContent='end' direction='row'>
              <Typography sx={{ mr: 1 }}>
                ¿Ya tienes una cuenta?
              </Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
