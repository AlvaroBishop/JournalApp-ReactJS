import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'

export const LoginPage = () => {

  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth )
  const { email, password, onInputChange, formState } = useForm({
    email: 'bishopgamma@gmail.com',
    password: '12345',
  })

  const onSubmit = e => {
    e.preventDefault();
    dispatch( checkingAuthentication() );

    console.log({ email, password })
    console.log(status)
  } 

  const onGoogleSignIn = () => 
  {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  console.log(status)
  return (
    <AuthLayout title='Login'>
       <form onSubmit={ onSubmit }>
          <Grid container >
            
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField // te permite escribir es como un input
                label="Correo"
                type="email"
                placeholder='correo@google.com'
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField // te permite escribir
                label="Contraseña"
                type="password"
                placeholder='Contraseña'
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
            />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type='submit' variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant="contained" fullWidth onClick={ onGoogleSignIn }>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>

  )
}
