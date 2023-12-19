import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { STATUS } from "../../../../constants/index";
import Swal from "sweetalert2";
import axios from "../../../../config/axiosInit";

const Register = ({ loggedUser, setLoggedUser }) => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const URL = process.env.REACT_APP_Apex_Gym;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      image: inputs.image,
      nameUser: inputs.nameUser,
      lastNameUser: inputs.lastNameUser,
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
      classes: inputs.classes,
      contractedPlan: inputs.contractedPlan,
      roll: inputs.roll,
    };
    try {
      const res = await axios.post(`${URL}/users/register`, newUser);
      if (res.status === STATUS.CREATED) {
        Swal.fire(
          "Registrado!",
          "Su usuario a iniciado sesion con exito",
          "success"
        );
        const data = res.data;
        localStorage.setItem("user-token", JSON.stringify(data));
        setLoggedUser(data);
        navigate("/users/table");
      }
    } catch (error) {      
      setError(true);
      error.response?.data?.message &&
        setErrorMessage(error.response?.data?.message);
    }
  };
  return (
    <div>
      <Container className="py-5 text-light">
        <h1>Registro</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
        {loggedUser?.token &&
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Foto de perfil</Form.Label>
            <Form.Control
              type="string"
              placeholder="Foto de perfil"
              maxLength={200}
              minLength={1}
              required
              name="image"
              value={inputs.image || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          }
          <Form.Group className="mb-3" controlId="formBasicNameUser">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="string"
              placeholder="Nombre"
              maxLength={50}
              minLength={3}
              required
              name="nameUser"
              value={inputs.nameUser || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastnameUser">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="string"
              placeholder="Apellido"
              maxLength={50}
              minLength={3}
              required
              name="lastNameUser"
              value={inputs.lastNameUser || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              maxLength={100}
              minLength={12}
              unique="true"
              required
              name="email"
              value={inputs.email || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control
              type="phone"
              placeholder="3815112233"
              maxLength={20}
              minLength={7}
              required
              name="phone"
              value={inputs.phone || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              minLength={8}
              required
              name="password"
              value={inputs.password || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          {loggedUser?.token &&
          <Form.Group className="mb-3" controlId="formBasicClasses">
            <Form.Label>Clases</Form.Label>
            <Form.Control
              type="string"
              placeholder="boxeo, musculacion"
              minLength={4}
              maxLength={100}
              name="classes"
              required
              value={inputs.classes || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        }
        {loggedUser?.token &&
          <Form.Group className="mb-3" controlId="formBasicContractedPlan">
            <Form.Label>Plan/es contratado/s</Form.Label>
            <Form.Control
              type="string"
              placeholder="boxeo principiante, solo muculacion"
              minLength={4}
              maxLength={100}
              name="contractedPlan"
              required
              value={inputs.contractedPlan || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        }
          {loggedUser?.token &&
          <Form.Group className="mb-3 w-100">
            <Form.Label>Roll: </Form.Label>
            <Form.Select
              name="roll"
              onChange={(e) => handleChange(e)}
              value={inputs.roll || "usuario"}
            >
              <option>Usuario</option>
              <option>Profesor</option>
              <option>Administrador</option>
            </Form.Select>
          </Form.Group>
          }
          <Button
            variant="dark"
            className="text-white w-50 mt-auto mb-5"
            type="submit"
          >
            <strong>Registrar</strong>
          </Button>
        </Form>
        {error ? (
          <Alert variant="danger" onClick={() => setError(false)} dismissible>
            {errorMessage}
          </Alert>
        ) : null}
      </Container>
    </div>
  );
};

export default Register;
