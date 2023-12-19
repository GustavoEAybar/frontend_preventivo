import { Alert, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  validateNameProduct,
  validateImage,
  validateCategory,
  validateType,
  validateSize,
  validateWeight,
  validateDescription,
  validateStock,
  validatePrice,
} from "../../../../helpers/validateProducts";
import { STATUS } from "../../../../constants";
import axios from "../../../../config/axiosInit";

const ProductCreate = ({ URL, getApi }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateNameProduct(inputs.nameProduct) ||
      !validateImage(inputs.image) ||
      !validateCategory(inputs.category) ||
      !validateType(inputs.type) ||
      !validateSize(inputs.size) ||
      !validateWeight(inputs.weight) ||
      !validateDescription(inputs.description) ||
      !validateStock(inputs.stock) ||
      !validatePrice(inputs.price)
    ) {
      Swal.fire("Oop!!", "Algun dato es invalido", "Error");
      return;
    }

    const newProduct = {
      nameProduct: inputs.nameProduct,
      image: inputs.image,
      category: inputs.category,
      type: inputs.type,
      size: inputs.size,
      weight: inputs.weight,
      description: inputs.description,
      stock: inputs.stock,
      price: inputs.price,
    };

    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Crear!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(`${URL}/products`, newProduct, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token")).token,
            },
          });
          console.log(res.status);
          if (res.status === STATUS.CREATED) {
            Swal.fire("¡Creado!", "El servicio ha sido creado.", "success");
            getApi("products");
            navigate("/products/table");
          }
        } catch (error) {
          error.response.data?.message &&
            error.response.data.errors?.map((error) =>
              setErrorMessage(error.msg)
            );
          setShow(true);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5 text-light">
        <h1>crear producto</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNameProduct">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="string"
              maxLength={100}
              minLength={4}
              placeholder="Nombre del producto"
              name="nameProduct"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="string"
              placeholder="Imagen"
              maxLength={200}
              minLength={1}
              name="image"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              type="string"
              maxLength={50}
              minLength={5}
              name="category"
              onChange={handleChange}
              required
            >
              <option>indumentaria deportiva</option>
              <option>bebidas</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={1}
              name="type"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSize">
            <Form.Label>Talle</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={0}
              placeholder="Talle"
              name="size"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="string"
              maxLength={5}
              minLength={0}
              max={10000}
              min={0}
              placeholder="Peso"
              name="weight"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="string"
              name="description"
              rows={3}
              minLength={1}
              maxLength={500}
              placeholder="Descripcion"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>Unidades</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="50000"
              minLength={1}
              maxLength={3}
              min={0}
              max={999}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="45000"
              minLength={1}
              maxLength={10}
              min={0}
              max={999999}
              name="price"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-primary">Crear</button>
          </div>
        </Form>
        {show && (
          <Alert
            key={errorMessage}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {errorMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ProductCreate;
