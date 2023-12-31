/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "./service/Service";
import { useEffect } from "react";

const ServicesTable = ({ services, getApi }) => {
  
  useEffect(()=>{
    getApi("services")
  }, []);

  return (
    <div>
      <Container className="py-5 text-light">
        <div className="d-flex align--items-center justify-content-between">
          <h1>Lista de servicios</h1>
          <Link to="/services/create" className="btn btn-primary">
            Crear servicio
          </Link>
        </div>
        <hr />
        {services?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Nombre</th>
                <th>Profesor</th>
                <th>Dias</th>
                <th>Horario</th>
                <th>Imagen</th>
                <th>Tipo de plan</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <Service key={service?._id} service={service} getApi={getApi} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-services-found d-flex align-items-center justify-content-center">
            <h1>🏋️‍♀️ No se encontraron servicios🏋️‍♀️</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ServicesTable;
