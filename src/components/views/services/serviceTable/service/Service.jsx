import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { STATUS } from "../../../../../constants";
import axios from "../../../../../config/axiosInit";

const Service = ({ service, getApi }) => {
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
            .delete(`${URL}/services/${id}`, {
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
                getApi('services');
              }
        } catch (error) {

        }
      }
    });
  };
  return (
    <tr>
        <td>{service?._id}</td>
        <td>{service?.nameService}</td>
        <td>{service?.nameTeacher}</td>
        <td>{service?.date}</td>
        <td>{service?.time}</td>
        <td>
            <p className="truncate-img-link m-0">{service?.image}</p></td>
        <td>{service?.planType}</td>
        <td>{service?.description}</td>
        <td>$ {service?.price}</td>
        <td className="w-25">
            <div className="d-flex justify-content-center">
                <Link
                to={`/services/edit/${service?._id}`}
                className='btn btn-primary mx-1 text-decoration-none text-center'>Actualizar</Link>
                <button onClick={() => handleDelete(service?._id)} className='btn-danger mx-1 text-decoration-none text-center'>Eliminar</button>
            </div>
        </td>
    </tr>
  );
};

export default Service;