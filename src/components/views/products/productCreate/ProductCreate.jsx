import { Alert, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  validateNameService,
  validateNameTeacher,
  validateDate,
  validateTime,
  validateImage,
  validateDescription,
  validatePlanType,
  validatePrice,
} from "../../../../helpers/validateFields";
import { STATUS } from "../../../../constants";
import Swal from "sweetalert2";
import axios from "../../../../config/axiosInit";

const ServiceCreate = ({ URL, getApi }) => {
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
      !validateNameService(inputs.nameService) ||
      !validateNameTeacher(inputs.nameTeacher) ||
      !validateDate(inputs.date) ||
      !validateTime(inputs.time) ||
      !validateImage(inputs.image) ||
      !validatePlanType(inputs.planType) ||
      !validateDescription(inputs.description) ||
      !validatePrice(inputs.price)
    ) {
      Swal.fire("Oop!!", "Algun dato es invalido", "Error");
      return;
    }

    const newService = {
      nameService: inputs.nameService,
      nameTeacher: inputs.nameTeacher,
      date: inputs.date,
      time: inputs.time,
      image: inputs.image,
      planType: inputs.planType,
      description: inputs.description,
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
          const res = await axios.post(URL, newService, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });
          if (res.status === STATUS.STATUS_CREATED) {
            Swal.fire("¡Creado!", "El servicio ha sido creado.", "success");
            getApi();
            navigate("/services/table");
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
      <Container className="py-5">
        <h1>crear servicio</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNameService">
            <Form.Label>Nombre del servicio</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={1}
              placeholder="Nombre del servicio"
              name="nameService"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNameTeacher">
            <Form.Label>Nombre del profesor</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={5}
              placeholder="Nombre del profesor"
              name="nameTeacher"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Dias</Form.Label>
            <Form.Select
              type="text"
              maxLength={100}
              name="date"
              onChange={handleChange}
              value={inputs.date || ""}
              required
            >
              <option>full</option>
              <option>lunes, miercoles y viernes</option>
              <option>martes, jueves y sabado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Horario</Form.Label>
            <Form.Select
              type="text"
              maxLength={100}
              name="time"
              onChange={handleChange}
              value={inputs.time || ""}
              required
            >
              <option>full</option>
              <option>de 8:00 a 9:00</option>
              <option>de 9:00 a 10:00</option>
              <option>de 10:00 a 11:00</option>
              <option>de 11:00 a 12:00</option>
              <option>de 17:00 a 18:00</option>
              <option>de 18:00 a 19:00</option>
              <option>de 19:00 a 20:00</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="string"
              placeholder="Imagen"
              name="image"
              maxLength={500}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPlanType">
            <Form.Label>Tipo de plan</Form.Label>
            <Form.Select
              type="text"
              maxLength={100}
              name="planType"
              onChange={handleChange}
              value={inputs.planType || ""}
              required
            >
              <option>Clase</option>
              <option>Solo musculacion</option>
              <option>Full</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicDescription"
          >
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="string"
              name="description"
              rows={3}
              minLength={1}
              maxLength={500}
              placeholder="Descripcion"
              value={inputs.description || ""}
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

export default ServiceCreate;
