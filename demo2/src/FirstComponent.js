import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import './App.css';

const FirstComponent = () => {
    const inputFile1 = useRef();
    const inputFile2 = useRef();
    const inputFile3 = useRef();

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

    const fileHandler1 = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        axios.post('https://reqres.in/api/users', formData, {headers: headers})
            .then((res) => {
                e.target.value = null;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const fileHandler2 = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        axios.post('https://reqres.in/api/users', formData, {headers: headers})
            .then((res) => {
                e.target.value = null;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const fileHandler3 = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        axios.post('https://reqres.in/api/users', formData, {headers: headers})
            .then((res) => {
                e.target.value = null;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='main' >
            <table className='table' >
                <tr className='table_row' >
                    <th className='title' >NSE Transaction</th>
                    <td>
                        <button onClick={btnHandler1} className='btn' >Output</button>
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
                        <button onClick={btnHandler2} className='btn' >Output</button>
                    </td>
                </tr>

                <tr className='table_row' >
                    <th className='title' >Transaction data in custody format-2</th>
                    <td>
                        <button onClick={btnHandler3} className='btn' >Output</button>
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
                        <button onClick={btnHandler4} className='btn' >Output</button>
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
                        <button onClick={btnHandler5} className='btn' >Output</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FirstComponent