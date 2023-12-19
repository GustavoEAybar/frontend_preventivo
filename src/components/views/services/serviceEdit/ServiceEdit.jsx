/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../../config/axiosInit";
import { useEffect, useRef, useState } from "react";
import {
  validateNameService,
  validateNameTeacher,
  validateDate,
  validateTime,
  validateImage,
  validatePlanType,
  validateDescription,
  validatePrice,
} from "../../../../helpers/validateServices";
import Swal from "sweetalert2";
import { STATUS } from "../../../../constants";

const ServiceEdit = ({ getApi }) => {
  const [service, setService] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = process.env.REACT_APP_Apex_Gym;
  const nameServiceRef = useRef(null);
  const nameTeacherRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const imageRef = useRef(null);
  const planTypeRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/services/${id}`);
      const serviceApi = res.data;
      setService(serviceApi);
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateNameService(nameServiceRef.current.value) ||
      !validateNameTeacher(nameTeacherRef.current.value) ||
      !validateDate(dateRef.current.value) ||
      !validateTime(timeRef.current.value) ||
      !validateImage(imageRef.current.value) ||
      !validatePlanType(planTypeRef.current.value) ||
      !validateDescription(descriptionRef.current.value) ||
      !validatePrice(priceRef.current.value)
    ) {
      Swal.fire("Ooop!!", "Algun dato es invalido", "Error");
      return;
    }

    const serviceUpdate = {
      nameService: nameServiceRef.current.value,
      nameTeacher: nameTeacherRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      image: imageRef.current.value,
      planType: planTypeRef.current.value,
      description: descriptionRef.current.value,
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
          const res = await axios.put(`${URL}/services/${id}`, serviceUpdate, {
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
            getApi("services");
            navigate("/services/table");
          }
        } catch {}
      }
    });
  };

  return (
    <div>
      <Container className="py-5 text-light">
        <h1>Editar servicio</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNameService">
            <Form.Label>Nombre del servicio</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre del servicio"
              maxLength={50}
              minLength={5}
              defaultValue={service.nameService}
              ref={nameServiceRef}
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
              defaultValue={service.nameTeacher}
              ref={nameTeacherRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Dias</Form.Label>
            <Form.Select type="text" maxLength={100} ref={dateRef} required>
              <option>{service.date}</option>
              <option>full</option>
              <option>lunes, miercoles y viernes</option>
              <option>martes, jueves y sabado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Horario</Form.Label>
            <Form.Select type="text" maxLength={100} ref={timeRef} required>
              <option>{service.time}</option>
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
              maxLength={200}
              minLength={1}
              defaultValue={service.image}
              ref={imageRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPlanType">
            <Form.Label>Tipo de plan</Form.Label>
            <Form.Select
              type="string"
              maxLength={50}
              ref={planTypeRef}
              required
            >
              <option>{service.planType}</option>
              <option>Full</option>
              <option>Clase</option>
              <option>Solo musculacion</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="string"
              placeholder="Descripcion"
              rows={3}
              minLength={1}
              maxLength={500}
              defaultValue={service.description}
              ref={descriptionRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="50000"
              minLength={1}
              maxLength={10}
              min={0}
              max={999999}
              defaultValue={service.price}
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

export default ServiceEdit;
