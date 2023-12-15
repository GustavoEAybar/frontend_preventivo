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
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Button, Container } from "react-bootstrap";

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
      const userApi = res.data;
      setUser(userApi);
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rollRef.current.value);
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
              type="text"
              placeholder="Foto de perfil"
              defaultValue={user?.image}
              ref={imageRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNameUser">
            <Form.Label>Nombre del usuario</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre del usuario"
              maxLength={50}
              minLength={3}
              defaultValue={user?.nameUser}
              ref={nameUserRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastnameUser">
            <Form.Label>Apellido del usuario</Form.Label>
            <Form.Control
              type="string"
              maxLength={50}
              minLength={3}
              placeholder="Apellido del usuario"
              defaultValue={user?.lastNameUser}
              ref={lastnameUserRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              maxLength={100}
              minLength={12}
              placeholder="Email"
              defaultValue={user?.email}
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="3815112233"
              defaultValue={user?.phone}
              ref={phoneRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              defaultValue={user?.password}
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicClasses">
            <Form.Label>Clases</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: natacion"
              defaultValue={user?.classes}
              ref={classesRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContractedPlan">
            <Form.Label>Plan/es contratado/s</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: full"
              defaultValue={user?.contractedPlan}
              ref={contractedPlanRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRoll">
            <Form.Label>Roll</Form.Label>
            <Form.Select
              value={user?.roll}
              onChenge={({ target }) =>
                setUser({ ...user, roll: target.value })
                
              }
            >
              <option value="">Seleccione una opcion</option>
              <option value="usuario">Usuario</option>
              <option value="profesor">Profesor</option>
              <option value="administrador">Administrador</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <Button className="btn btn-primary">Actualizar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UserEdit;
