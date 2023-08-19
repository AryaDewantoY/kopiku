import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/product/${id}`
        );

        const result = await response.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Tangani error jika diperlukan...
      }
    }

    fetchData();
  }, [id]);

  async function editProduct() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);

    try {
      const result = await fetch(
        `http://localhost:8000/api/updateproduct/${id}?_method=PUT`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (result.ok) {
        alert("Product has been updated!");
        navigate("/");
      } else {
        console.error("Error updating product:", result);
        // Tangani error jika diperlukan...
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Tangani error jika diperlukan...
    }
  }

  return (
    <div>
      <Header />
      <h1>Update Products</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          className="form-control mb-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <img
          width="50%"
          height="50%"
          src={"http://localhost:8000/" + data.file_path}
        />
        <br />
        <br />
        <button className="btn btn-danger" onClick={editProduct}>
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;