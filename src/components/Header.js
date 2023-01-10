import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../src/images/logo.svg'

const imgStyle = {
    img: {
        width: '70%',
        '@media (max-width: 900px)': {
            width: '50%'
        }
    },
    title: {
        fontSize: "20px",
        '@media (max-width: 900px)': {
            fontSize: "12px "
        }
    }
}

const Header = () => {
    const navigate = useNavigate();
   
    const logoutHandler = () => {
        navigate('/login');
        localStorage.removeItem('token');
    }

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={1}
                backgroundColor="#fff"
                boxShadow="0 0 20px #80808099"
            >
                <Box>
                    <img style={imgStyle.img} src={logo} alt="iifl-logo" />
                </Box>

                <Box>
                    {
                        localStorage.getItem('token') ?
                        <Button className='btn' onClick={logoutHandler} >LOGOUT</Button>
                        :
                        <Typography style={imgStyle.title} color="#242056" fontWeight="800" >MUTUAL FUND</Typography>
                    }
                </Box>
            </Box>
        </>
    )
}

export default Header