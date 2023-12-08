import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { STATUS } from "../../../../../constants";
import axios from "../../../../../config/axiosInit";

const Product = ({ product, getApi }) => {
  const URL = process.env.REACT_APP_Apex_Gym;
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, Borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios
            .delete(`${URL}/products/${id}`, {
              headers: {
                "Content-Type": "application/json",
                "x-access-token": JSON.parse(
                  localStorage.getItem("user-token")
                ).token,
              },
            })
            if (res.data.status === STATUS.SUCCESS) {
                Swal.fire(
                  "¡Eliminado!",
                  "El servicio ha sido eliminado.",
                  "success"
                );
                getApi("products");
              }
        } catch (error) {

        }
      }
    });
  };
  return (
    <tr>
        <td>{product?._id}</td>
        <td>{product?.nameproduct}</td>
        <td>
            <p className="truncate-img-link m-0">{product?.image}</p></td>
        <td>{product?.category}</td>
        <td>{product?.type}</td>
        <td>{product?.size}</td>
        <td>{product?.weight}</td>
        <td>{product?.description}</td>
        <td>{product?.stock}</td>
        <td>$ {product?.price}</td>
        <td className="w-25">
            <div className="d-flex justify-content-center">
                <Link
                to={`/products/edit/${product?._id}`}
                className='btn btn-primary mx-1 text-decoration-none text-center'>Actualizar</Link>
                <button onClick={() => handleDelete(product?._id)} className='btn-danger mx-1 text-decoration-none text-center'>Eliminar</button>
            </div>
        </td>
    </tr>
  );
};

export default Product;