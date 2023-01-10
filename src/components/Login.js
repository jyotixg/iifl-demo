import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })

    // const [userData, setUserData] = useState({
    //     email: "",
    //     password: ""
    // })
    
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData, [name]: value
        })
    }

    const loginHandler = (e) => {
        e.preventDefault();

        axios.post('https://reqres.in/api/login', userData)
            .then((res) => {
                setIsLoading(true);
                setTimeout(() => {
                    // window.alert("login successfull");
                    localStorage.setItem('token', res.data.token);
                    setIsLoading(true);
                    navigate('/dashboard');
                }, 3000);
            })
            .catch((err) => {
                console.log(err, "err");
                setIsLoading(true);
                setTimeout(() => {

                    window.alert("login failed");
                    setIsLoading(false)
                }, 2000);
            })
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Box className="loginBox"
                sx={{
                    '@media (max-width:900px)': {
                        width: '80%',
                        marginTop: "50px"
                    }
                }}
            >
                <form onSubmit={loginHandler} className="form" >
                    <FormControl sx={{ m: 1, width: '25ch' }} >
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            onChange={onChangeHandler}
                            value={userData.email}
                            required
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            name="password"
                            onChange={onChangeHandler}
                            value={userData.password}
                            required
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }}>
                        <Button className='loginBtn' type="submit" >{isLoading ? "Please wait" : "Login"}</Button>
                    </FormControl>

                </form>
            </Box>
        </>
    )
}

export default Login