import { Google } from '@mui/icons-material'
import React,{ useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startGoogleSignIn } from '../../store/slices/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)
  const { email, password, onInputChange, formState } = useForm({ email: '', password: '' });
  const dispatch = useDispatch()

  const isAuthenticated = useMemo(() => status === 'checking', [status])



  const onsubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication(formState))
    console.log(formState)
  }
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn(formState))
    console.log(formState)
  }

  return (
    <AuthLayout title='Login'>

      <form onSubmit={onsubmit}>
        <Grid
          container
        >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='example@email.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            >

            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='********'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            >

            </TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >
            <Grid item xs={12} md={12 } sx={{ mt: 1 }} >
              <Button
                disabled={isAuthenticated}
                variant='contained'
                fullWidth
                md={6}
                xs={12}
                type='submit'>
                <Typography sx={{ ml: 1 }}>
                  LOGIN
                </Typography>
              </Button>
            </Grid>


          </Grid>
          <Grid container justifyContent direction='row'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
