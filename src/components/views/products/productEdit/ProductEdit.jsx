/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../../config/axiosInit";
import { useEffect, useRef, useState } from "react";
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
import Swal from "sweetalert2";
import { STATUS } from "../../../../constants";

const ProductEdit = ({ getApi }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = process.env.REACT_APP_Apex_Gym;
  const nameProductRef = useRef(null);
  const imageRef = useRef(null);
  const categoryRef = useRef(null);
  const typeRef = useRef(null);
  const sizeRef = useRef(null);
  const weightRef = useRef(null);
  const descriptionRef = useRef(null);
  const stockRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/products/${id}`);
      const productApi = res.data;
      setProduct(productApi);
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateNameProduct(nameProductRef.current.value) ||
      !validateImage(imageRef.current.value) ||
      !validateCategory(categoryRef.current.value) ||
      !validateType(typeRef.current.value) ||
      !validateSize(sizeRef.current.value) ||
      !validateWeight(weightRef.current.value) ||
      !validateDescription(descriptionRef.current.value) ||
      !validateStock(stockRef.current.value) ||
      !validatePrice(priceRef.current.value)
    ) {
      Swal.fire("Ooop!!", "Algun dato es invalido", "Error");
      return;
    }

    const productUpdate = {
      nameProduct: nameProductRef.current.value,
      image: imageRef.current.value,
      category: categoryRef.current.value,
      type: typeRef.current.value,
      size: sizeRef.current.value,
      weight: weightRef.current.value,
      description: descriptionRef.current.value,
      stock: stockRef.current.value,
      price: priceRef.current.value,
    };

    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Actualizar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(`${URL}/products/${id}`, productUpdate, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });
          if (res.status === STATUS.OK) {
            Swal.fire(
              "¡Actualizado!",
              "El servicio ha sido actualizado.",
              "success"
            );
            getApi();
            navigate("/products/table");
          }
        } catch (error) {}
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Editar producto</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNameProduct">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre del producto"
              maxLength={100}
              minLength={4}
              defaultValue={product.nameProduct}
              ref={nameProductRef}
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
              defaultValue={product.image}
              ref={imageRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              type="string"
              maxLength={50}
              minLength={5}
              ref={categoryRef}
              required
            >
              <option>{product.category}</option>
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
              defaultValue={product.type}
              ref={typeRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSize">
            <Form.Label>Talle</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={0}
              defaultValue={product.size}
              ref={sizeRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="number"
              maxLength={5}
              minLength={0}
              max={10000}
              min={0}
              defaultValue={product.weight}
              ref={weightRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="string"
              placeholder="Descripcion"
              rows={3}
              minLength={1}
              maxLength={500}
              defaultValue={product.description}
              ref={descriptionRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicStock">
            <Form.Label>Unidades</Form.Label>
            <Form.Control
              type="number"
              placeholder="50000"
              minLength={1}
              maxLength={3}
              min={0}
              max={999}
              defaultValue={product.stock}
              ref={stockRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="50000"
              minLength={1}
              maxLength={10}
              min={0}
              max={999999}
              defaultValue={product.price}
              ref={priceRef}
              required
            />
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-primary">Actualizar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProductEdit;
