// Table.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactListsComponents() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/contacts'); // Replace with your API endpoint
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
            <h1>Messages</h1>
            <table className={"table table-bordered table-hover"}>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td >{item.message}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>


    );
}

export default ContactListsComponents;
