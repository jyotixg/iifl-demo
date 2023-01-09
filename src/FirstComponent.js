import { Alert, AlertTitle, Box, Button, CircularProgress, LinearProgress, Snackbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import './App.css';

const FirstComponent = () => {
    const inputFile1 = useRef();
    const inputFile2 = useRef();
    const inputFile3 = useRef();
    const [uploaded, setUploaded] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);

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

    // const allowedExtensions = ["csv"];
    // const fileSize = 50000000;
    // const fileHandler1 = (e) => {
    //     const inputFile = e.target.files[0];
    //     const fileExtension = inputFile?.type.split("/")[1]
    //     if (!allowedExtensions.includes(fileExtension)) {
    //         alert("Please upload only csv files");
    //     }
    //     else if (inputFile.size == fileSize || inputFile.size > fileSize) {
    //         alert("Please upload file less than 50 mb");
    //     }
    //     else {
    //         const formData = new FormData();
    //         formData.append("file", inputFile);
    //         axios.post('https://reqres.in/api/users', formData, { headers: headers })
    //             .then((res) => {
    //                 e.target.value = null;
    //                 console.log(res.data);
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }

    const allowedExtensions = ["csv"];
    const fileSize = 50000000;
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
                    // console.log(data.loaded, data.total,"data");
                    // console.log(Math.round((data.loaded / data.total) * 100));
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
                    // console.log(data.loaded, data.total,"data");
                    // console.log(Math.round((data.loaded / data.total) * 100));
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
                    // console.log(data.loaded, data.total,"data");
                    // console.log(Math.round((data.loaded / data.total) * 100));
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
            <div className='main' >
                {
                    (uploaded > 0 && uploaded < 100) &&
                    <Box display="flex" width="100%" alignItems="center" justifyContent='center' gap="10px" >
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


                <table className='table' >
                    <tr className='table_row' >
                        <th className='title' >NSE Transaction</th>
                        <td>
                            <button onClick={btnHandler1} className='btn' >Download</button>
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >NSE Response</th>
                        <td>
                            <button onClick={filebtn1} className='btn' >Upload</button>
                            <input className='inputfile' ref={inputFile1} onChange={fileHandler1} type="file" />
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >Transaction data in custody format-1</th>
                        <td>
                            <button onClick={btnHandler2} className='btn' >Download</button>
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >Transaction data in custody format-2</th>
                        <td>
                            <button onClick={btnHandler3} className='btn' >Download</button>
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >UTR Response from custody</th>
                        <td>
                            <button onClick={filebtn2} className='btn' >Upload</button>
                            <input className='inputfile' ref={inputFile2} onChange={fileHandler2} type="file" />
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >UTR confirmation NSE</th>
                        <td>
                            <button onClick={btnHandler4} className='btn' >Download</button>
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >NSE Script master</th>
                        <td>
                            <button onClick={filebtn3} className='btn' >Upload</button>
                            <input className='inputfile' ref={inputFile3} onChange={fileHandler3} type="file" />
                        </td>
                    </tr>

                    <tr className='table_row' >
                        <th className='title' >Summary for a day</th>
                        <td>
                            <button onClick={btnHandler5} className='btn' >Download</button>
                        </td>
                    </tr>
                </table>
            </div >
            {
                uploadSuccess ?
                    <>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                File uploaded successfully!
                            </Alert>
                        </Snackbar>
                    </>
                    :
                    <>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                Unable to upload file!
                            </Alert>
                        </Snackbar>
                    </>

            }
            {/* </> */}

        </>
    )
}

export default FirstComponent