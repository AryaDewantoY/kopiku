import Header from './Header'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

async function AddProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append('file',file);
    formData.append('price',price);
    formData.append('name',name);
    formData.append('description',description);
    let result = await fetch('http://localhost:8000/api/addProduct', {
        method:'POST',
        body: formData,
    });
    alert("Product telah di tambah")
    navigate('/');
}


    return(
        <div>
            <Header />
            <h1 className='mt-5'>Addproduct Pages</h1>
            <div className='col-sm-6 offset-sm-3'>
            <br />
            <input type='text' className='form-control mb-3' placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
            <input type='file' className='form-control mb-3' placeholder='File' onChange={(e) => setFile(e.target.files[0])}></input>
            <input type='text' className='form-control mb-3' placeholder='Price' onChange={(e) => setPrice(e.target.value)}></input>
            <textarea type='text' className='form-control mb-3' placeholder='Description' onChange={(e)=> setDescription(e.target.value)}></textarea>
            <br />
            <button className='btn btn-primary' onClick={AddProduct}>Add Product</button>
            </div>
        </div>
    )
    }

export default AddProduct