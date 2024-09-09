// Table.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useAuth} from "../security/AuthContext";

function CertificateListsComponents() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const authContext = useAuth()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await authContext.apiClient.get('/api/certificates'); // Replace with your API endpoint
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <>
            <br/>
            <br/>
            <h1>Certificate lists</h1>
            <table className={"table table-bordered table-hover"}>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Certificate Name</th>
                    <th scope="col">Issued Date</th>
                    <th scope="col">Organization</th>
                    <th scope="col">About Course</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.organization}</td>
                        <td >{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>


    );
}

export default CertificateListsComponents;
