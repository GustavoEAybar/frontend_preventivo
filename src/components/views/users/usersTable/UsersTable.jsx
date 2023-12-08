/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import User from "./User/User";
import { useEffect } from "react";

const UsersTable = ({ users, getApi }) => {
  useEffect(() => {
    getApi("users");
  }, []);
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align--items-center justify-content-between">
          <h1>Lista de usuarios</h1>
          <Link to="/users/register" className="btn btn-primary">
            Crear usuario
          </Link>
        </div>
        <hr />
        {users?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Clave</th>
                <th>Clases</th>
                <th>Planes contratado</th>
                <th>Roll</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User key={user?._id} user={user} getApi={getApi} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-users-found d-flex align-items-center justify-content-center">
            <h1>🏋️‍♀️ No se encontraron usuarios🏋️‍♀️</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default UsersTable;