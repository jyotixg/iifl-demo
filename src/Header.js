import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../src/images/logo.svg';

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
                    <img style={imgStyle.img} src={logo} />
                </Box>

                <Box>
                    <Typography style={imgStyle.title} color="#242056" fontWeight="800" >MUTUAL FUND</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Header