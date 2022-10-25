import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Container, TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { signUp } from '../../api';
import { ColorButton } from '../../styles';


export default function SignUp() {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const values = [
        {
        id: 1,
        value: name,
        onChange: setName,
        type: 'text',
        label: 'Name',
        variant: 'outlined',
        xs: 12,
        },
        {
        id: 2,
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

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleValidation = () => {
        if (!isValidEmail(email)) {
            return false        
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(handleValidation()){
            const res =  await signUp({name,email})
            const data = await res.json()
            const token = data.token
            if(data.status === 'ok'){
                localStorage.setItem('access_token', token)
                localStorage.setItem('name', name)
                navigate('/')
            }
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
                    <Grid item xs={el.xs} sm={el.sm ? 6 : 12 }  key={`sign-up-input-${el.id}`} >
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
              Register
            </ColorButton>
            <Grid container justifyContent="center" textAlign='center'>
              <Grid item>
                <Typography color='primary.dark'>
                  ¿Already have an account?
                </Typography>
                <Typography onClick={()=>{navigate('/sign-in')}} color={'primary.main'} sx={{cursor:'pointer'}}>
                    Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}