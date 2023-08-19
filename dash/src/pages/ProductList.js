import Header from "./Header";
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/list");
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function deleteDiscard(id) {
        if (window.confirm("Apakah anda yakin untuk menghapus item ini " + id + "?")) {
            let result = await fetch("http://localhost:8000/api/delete/" + id, {
                method: "DELETE",
            });
            result = await result.json();
            fetchData();
            alert("Produk berhasil dihapus");
        } else {
            fetchData();
        }
    }

    return (
        <div>
            <Header />
            <h2 className="mt-3">Product List</h2>
            <div className="col-sm-8 offset-sm-2">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Image</td>
                            <td>Discard</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img style={{ width: 150 }} src={"http://localhost:8000/" + item.file_path} alt={item.name}></img>
                                </td>
                                <td>
                                    <span className="btnDelete" onClick={() => deleteDiscard(item.id)}>Delete</span>
                                    <Link to={"update/" + item.id}>
                                        <span className="btnUpdate">Update</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ProductList;