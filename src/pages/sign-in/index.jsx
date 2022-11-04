import React, { useState, useEffect } from 'react'
import {Box, Grid, Typography, Container, TextField } from "@mui/material";
import { ColorButton } from '../../styles';
import {useNavigate} from 'react-router-dom'
import { signIn } from '../../api';


export default function SignIn() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');

    const values = [
        {
        id: 1,
        value: email,
        onChange: setEmail,
        type: 'email',
        label: 'Email',
        variant: 'outlined',
        xs: 12,
        },
    ];

    useEffect(() => {
        if(localStorage.getItem('access_token')){
          navigate('/')
        }
    }, [navigate])


    const handleSubmit = async (e) => {
        e.preventDefault();
            const res =  await signIn({email})
            const data = await res.json()
            const token = data.token
            const name = data.name
            if(data.status === 'ok'){
                localStorage.setItem('access_token', token)
                localStorage.setItem('name', name)
                navigate('/')
            }
    }


  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" color={'primary.main'} sx={{mt:1}}>
            Notes App
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                {values.map((el) => (
                    <Grid item xs={el.xs} key={`sign-up-input-${el.id}`} >
                        <TextField
                            fullWidth 
                            required 
                            type={el.type} 
                            key={`sign-up-input-${el.id}`} 
                            label={el.label} 
                            variant={el.variant} 
                            onChange={(e) => { el.onChange(e.target.value) }}
                        />
                    </Grid>
                    ))}
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </ColorButton>
            <Grid container justifyContent="center" textAlign='center'>
              <Grid item>
                <Typography color='primary.dark'>
                  ¿Don't have an account?
                </Typography>
                <Typography onClick={()=>{navigate('/sign-up')}} color={'primary.main'} sx={{cursor:'pointer'}}>
                    Sign up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}