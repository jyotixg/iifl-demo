import { Alert, Box, Button, LinearProgress, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import './App.css';
import '../App.css';


const Dashboard = () => {
    const nseResponseFileRef = useRef();
    const utrResponseFileRef = useRef();
    const nseScriptFileRef = useRef();
    const [uploaded, setUploaded] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [authenticated, setAuthenticated] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const userToken = localStorage.getItem('token');

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

    const nseTransactionBtn = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const transactionDataBtn1 = () => {
        axios.get('https://reqres.in/api/users/1')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const transactionDataBtn2 = () => {
        axios.get('https://reqres.in/api/unknown/2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const utrConfirmationBtn = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const summaryBtn = () => {
        axios.get('https://reqres.in/api/users/2')
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const nseResponseBtn = () => {
        nseResponseFileRef.current.click();
    }

    const utrResponseBtn = () => {
        utrResponseFileRef.current.click();
    }

    const nseScriptBtn = () => {
        nseScriptFileRef.current.click();
    }

    const headers = {
        "Content-Type": "multipart/form-data",
    }

    const allowedExtensions = ["csv"];
    const fileSize = 20000000;
    const nseResponseFileHandler = (e) => {
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

    const utrResponseFileHandler = (e) => {
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

    const nseScriptFileHandler = (e) => {
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
                                    <Button onClick={nseTransactionBtn} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    NSE Response
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={nseResponseBtn} className="btn" >Upload</Button>
                                    <input
                                        ref={nseResponseFileRef}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={nseResponseFileHandler}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Transaction data in custody format-1
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={transactionDataBtn1} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Transaction data in custody format-2
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={transactionDataBtn2} className="btn">Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    UTR Response from custody
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={utrResponseBtn} className="btn" >Upload</Button>
                                    <input
                                        ref={utrResponseFileRef}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={utrResponseFileHandler}
                                    />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    UTR confirmation NSE
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={utrConfirmationBtn} className="btn" >Download</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    NSE Script master
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={nseScriptBtn} className="btn" >Upload</Button>
                                    <input
                                        ref={nseScriptFileRef}
                                        type="file"
                                        accept=".csv"
                                        style={{ display: "none" }}
                                        onChange={nseScriptFileHandler}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row" className="title">
                                    Summary for a day
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={summaryBtn} className="btn" >Download</Button>
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