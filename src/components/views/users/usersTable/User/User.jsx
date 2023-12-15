import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { STATUS } from "../../../../../constants";
import axios from "../../../../../config/axiosInit";

const User = ({ user, getApi }) => {
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
          const res = await axios.delete(`${URL}/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });
          if (res.data.status === STATUS.SUCCESS) {
            Swal.fire(
              "¡Eliminado!",
              "El servicio ha sido eliminado.",
              "success"
            );
            getApi('users');
          }
        } catch (error) {}
      }
    });
  };
  return (
    <tr>
      <td>{user?._id}</td>
      <td>{user?.image}</td>
      <td>{user?.nameUser}</td>
      <td>{user?.lastNameUser}</td>
      <td>{user?.email}</td>
      <td>{user?.phone}</td>
      <td>{user?.password}</td>
      <td>{user?.classes}</td>
      <td>{user?.contractedPlan}</td>
      <td>{user?.roll}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            to={`/users/edit/${user?._id}`}
            className="btn btn-primary mx-1 text-decoration-none text-center"
          >
            Actualizar
          </Link>
          <button
            onClick={() => handleDelete(user?._id)}
            className="btn-danger mx-1 text-decoration-none text-center"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default User;
