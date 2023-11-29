import { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { STATUS } from "../../../constants/index";
import Swal from "sweetalert2";
import axios from "../../../config/axiosInit";

const Login = ({ setLoggedUser }) => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const URL = import.meta.env.Apex_Gym;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      if (res.status === STATUS.STATUS_OK) {
        Swal.fire(
          "Registrado!",
          "Su usuario a iniciado sesion con exito",
          "success"
        );
        const data = res.data;
        localStorage.setItem("user-token", JSON.stringify(data));
        setLoggedUser(data);
        navigate("/");
      }
    } catch (error) {
      setError(true);
      error.response?.data?.message &&
        setErrorMessage(error.response?.data?.message);
    }
  };
  return (
    <div>
      <Container className="py-5">
        <h1>Login</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password || ""}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Link
            to="/users/register"
            className="btn btn-primary text-decoration-none"
          >
            ¿No tienes cuenta? Registrate
          </Link>
          <div className="text-end">
            <button className="btn btn-primary">Login</button>
          </div>
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

export default Login;
