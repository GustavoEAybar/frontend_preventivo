/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import { useEffect } from "react";

const ProductsTable = ({ products, getApi }) => {
  useEffect(()=>{
    getApi("products")
  }, [])
  return (
    <div>
      <Container className="py-5 text-light">
        <div className="d-flex align--items-center justify-content-between">
          <h1>Lista de productos</h1>
          <Link to="/products/create" className="btn btn-primary">
            Crear producto
          </Link>
        </div>
        <hr />
        {products?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Talle</th>
                <th>Contenido</th>
                <th>Descripcion</th>
                <th>Unidades</th>
                <th>Precio</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <Product key={product?._id} product={product} getApi={getApi} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>🏋️‍♀️ No se encontraron productos 🏋️‍♀️</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsTable;
