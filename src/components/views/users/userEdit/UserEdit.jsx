/* eslint-disable react-hooks/exhaustive-deps */
import axios from "../../../../config/axiosInit";
import {
  validateImage,
  validateNameUser,
  validateLastnameUser,
  validateEmail,
  validatePhone,
  validatePassword,
  validateClasses,
  validateContractedPlan,
  validateRoll,
} from "../../../../helpers/validateUsers";
import { STATUS } from "../../../../constants/index";
import { useEffect, useRef, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const UserEdit = ({ getApi }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = process.env.REACT_APP_Apex_Gym;
  const imageRef = useRef(null);
  const nameUserRef = useRef(null);
  const lastnameUserRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const classesRef = useRef(null);
  const contractedPlanRef = useRef(null);
  const rollRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/users/${id}`);
      const serviceApi = res.data;
      setUser(serviceApi);
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateImage(imageRef.current.value) ||
      !validateNameUser(nameUserRef.current.value) ||
      !validateLastnameUser(lastnameUserRef.current.value) ||
      !validateEmail(emailRef.current.value) ||
      !validatePhone(phoneRef.current.value) ||
      !validatePassword(passwordRef.current.value) ||
      !validateClasses(classesRef.current.value) ||
      !validateContractedPlan(contractedPlanRef.current.value) ||
      !validateRoll(rollRef.current.value)
    ) {
      Swal.fire("Ooop!!", "Algun dato no es valido", "error");
      return;
    }

    const userUpdate = {
      image: imageRef.current.value,
      nameUser: nameUserRef.current.value,
      lastnameUser: lastnameUserRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      classes: classesRef.current.value,
      contractedPlan: contractedPlanRef.current.value,
      roll: rollRef.current.value,
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
          const res = await axios.put(`${URL}/users/${id}`, userUpdate, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });
          if (res.status === STATUS.OK) {
            Swal.fire(
              "¡Actualizado!",
              "El usuario ha sido actualizado.",
              "success"
            );
            getApi();
            navigate("/users/table");
          }
        } catch {}
      }
    });
  };
  return (
    <div>
      <Container className="py-5">
        <h1>Editar usuario</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Foto de perfil</Form.Label>
            <Form.Control
              type="string"
              placeholder="Foto de perfil"
              maxLength={200}
              minLength={1}
              defaultValue={user.image}
              ref={imageRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNameUser">
            <Form.Label>Nombre del usuario</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre del usuario"
              maxLength={50}
              minLength={3}
              defaultValue={user.nameUser}
              ref={nameUserRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastnameUser">
            <Form.Label>Apellido del usuario</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={3}
              placeholder="Apellido del usuario"
              defaultValue={user.lasNameUser}
              ref={lastnameUserRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="string"
              maxLength={100}
              minLength={12}
              placeholder="Email"
              defaultValue={user.email}
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="phone"
              placeholder="3815112233"
              minLength={7}
              maxLength={20}
              defaultValue={user.phone}
              ref={phoneRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="string"
              placeholder="********"
              minLength={8}
              defaultValue={user.password}
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicClasses">
            <Form.Label>Clases</Form.Label>
            <Form.Control
              type="string"
              minLength={4}
              defaultValue={user.classes}
              ref={classesRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContractedPlan">
            <Form.Label>Plan/es contratado/s</Form.Label>
            <Form.Control
              type="string"
              placeholder="Plan/es contratado/s"
              rows={3}
              minLength={4}
              maxLength={100}
              defaultValue={user.contractedPlan}
              ref={contractedPlanRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRoll">
            <Form.Label>Roll</Form.Label>
            <Form.Select
              type="string"
              minLength={7}
              maxLength={20}
              ref={rollRef}
              required
            >
              <option>{user.roll}</option>
              <option>Usuario</option>
              <option>Profesor</option>
              <option>Administrador</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-primary">Actualizar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UserEdit;
