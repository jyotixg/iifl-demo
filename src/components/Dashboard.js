import { Alert, Box, Button, LinearProgress, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import './App.css';
import '../App.css';


const Dashboard = () => {
    const inputFile1 = useRef();
    const inputFile2 = useRef();
    const inputFile3 = useRef();
    const [uploaded, setUploaded] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [authenticated, setAuthenticated] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const userToken = localStorage.getItem('token');
        console.log(userToken, "userToken");

        if(!userToken){
            navigate('/login')
        }
    },[])

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const btnHandler1 = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const btnHandler2 = () => {
        axios.get('https://reqres.in/api/users/1')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const btnHandler3 = () => {
        axios.get('https://reqres.in/api/unknown/2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const btnHandler4 = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const btnHandler5 = () => {
        axios.get('https://reqres.in/api/users/2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const filebtn1 = () => {
        inputFile1.current.click();
    }

    const filebtn2 = () => {
        inputFile2.current.click();
    }

    const filebtn3 = () => {
        inputFile3.current.click();
    }

    const headers = {
        "Content-Type": "multipart/form-data",
    }

    const allowedExtensions = ["csv"];
    const fileSize = 20000000;
    const fileHandler1 = (e) => {
        const inputFile = e.target.files[0];
        const fileExtension = inputFile?.type.split("/")[1];
        const formData = new FormData();
        formData.append("file", inputFile);
        if (!allowedExtensions.includes(fileExtension)) {
            alert("Please upload only csv files");
        }
        else if (inputFile.size == fileSize || inputFile.size > fileSize) {
            alert("Please upload file less than 50 mb");
        }
        else {
            axios.post('https://reqres.in/api/users', formData, {
                onUploadProgress: (data) => {
                    setUploaded(Math.round((data.loaded / data.total) * 100))
                }
            }, { headers: headers })
                .then((res) => {
                    e.target.value = null;
                    console.log(res.data);
                    setUploadSuccess(true);
                    setOpen(true);
                })
                .catch((err) => {
                    console.log(err);
                    setUploadSuccess(false);
                    setOpen(true);
                })
        }

    }

    const fileHandler2 = (e) => {
        const inputFile = e.target.files[0];
        const fileExtension = inputFile?.type.split("/")[1];
        const formData = new FormData();
        formData.append("file", inputFile);
        if (!allowedExtensions.includes(fileExtension)) {
            alert("Please upload only csv files");
        }
        else if (inputFile.size == fileSize || inputFile.size > fileSize) {
            alert("Please upload file less than 50 mb");
        }
        else {
            axios.post('https://reqres.in/api/users', formData, {
                onUploadProgress: (data) => {
                    setUploaded(Math.round((data.loaded / data.total) * 100))
                }
            }, { headers: headers })
                .then((res) => {
                    e.target.value = null;
                    console.log(res.data);
                    setUploadSuccess(true);
                    setOpen(true);
                })
                .catch((err) => {
                    console.log(err);
                    setUploadSuccess(false);
                    setOpen(true);
                })
        }

    }

    const fileHandler3 = (e) => {
        const inputFile = e.target.files[0];
        const fileExtension = inputFile?.type.split("/")[1];
        const formData = new FormData();
        formData.append("file", inputFile);
        if (!allowedExtensions.includes(fileExtension)) {
            alert("Please upload only csv files");
        }
        else if (inputFile.size == fileSize || inputFile.size > fileSize) {
            alert("Please upload file less than 50 mb");
        }
        else {
            axios.post('https://reqres.in/api/users', formData, {
                onUploadProgress: (data) => {
                    setUploaded(Math.round((data.loaded / data.total) * 100))
                }
            }, { headers: headers })
                .then((res) => {
                    e.target.value = null;
                    console.log(res.data);
                    setUploadSuccess(true);
                    setOpen(true);
                })
                .catch((err) => {
                    console.log(err);
                    setUploadSuccess(false);
                    setOpen(true);
                })
        }
    }

    return (
        <>
            {
                (uploaded > 0 && uploaded < 100) &&
                <Box marginTop={2} display="flex" width="100%" alignItems="center" justifyContent='center' gap="10px" >
                    <Box style={{ width: "43%", marginBottom: "10px", marginLeft: "" }} >
                        <LinearProgress
                            className="custom-class"
                            style={{ height: "20px", color: "black", marginLeft: "43px" }}
                            variant="determinate"
                            value={uploaded}
                        />
                    </Box>
                    <Box>
                        <Typography>
                            {uploaded}%
                        </Typography>
                    </Box>
                </Box>
            }

            {/* {
                uploadSuccess ?
                    <div style={{ willChange: "transform" }}>
                        <Snackbar open={open} autoHideDuration={31000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                File uploaded successfully!
                            </Alert>
                        </Snackbar>
                    </div>
                    :
                    <div style={{ willChange: "transform" }}>
                        <Snackbar open={open} autoHideDuration={31000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                Unable to upload file!
                            </Alert>
                        </Snackbar>
                    </div>
            } */}

            {/* {
                uploadSuccess ?
                    <div style={{ border:"1px solid red", width: "30%",  margin: "auto",marginTop: "15px" }} >
                        <Alert open={open} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            File uploaded successfully!
                        </Alert>
                    </div>
                    :
                    <div style={{ border:"1px solid red", width: "30%",  margin: "auto",marginTop: "15px" }} >
                        <Alert open={open} onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Unable to upload file!
                        </Alert>
                    </div>
            } */}

            {
                uploadSuccess ?
                    <Snackbar open={open} autoHideDuration={31000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            File uploaded successfully!
                        </Alert>
                    </Snackbar>
                    :
                    <Snackbar open={open} autoHideDuration={31000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Unable to upload file!
                        </Alert>
                    </Snackbar>
            }


            <Box className='table'
                sx={{
                    ['@media (max-width:900px)']: {
                        width: '90%'
                    }
                }}
            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    NSE Transaction
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={btnHandler1} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    NSE Response
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={filebtn1} className="btn" >Upload</Button>
                                    <input
                                        ref={inputFile1}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={fileHandler1}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Transaction data in custody format-1
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={btnHandler2} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Transaction data in custody format-2
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={btnHandler3} className="btn">Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    UTR Response from custody
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={filebtn2} className="btn" >Upload</Button>
                                    <input
                                        ref={inputFile2}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={fileHandler2}
                                    />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    UTR confirmation NSE
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={btnHandler4} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    NSE Script master
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={filebtn3} className="btn" >Upload</Button>
                                    <input
                                        ref={inputFile3}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={fileHandler3}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Summary for a day
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={btnHandler5} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default Dashboard