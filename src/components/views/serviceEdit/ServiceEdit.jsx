import { Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../config/axiosInit";
import { useEffect, useRef, useState } from "react";
import {
    validateNameService,
    validateNameTeacher,
  validateDate,
  validateTime,
  validateImage,
  validatePlaneType,
  validateDescription,
  validatePrice,
} from "../../../helpers/validateFields";
import Swal from "sweetalert2";
import { STATUS } from "../../../constants";

const ServiceEdit = () => {
  const [service, setService] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = import.meta.env.Apex_Gym;
  const nameServiceRef = useRef(null);
  const nameTeacherRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const imageRef = useRef(null);
  const planeTypeRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      const productApi = res.data;
      setService(productApi);
    } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateNameService(nameServiceRef.current.value) ||
      !validateNameTeacher(nameTeacherRef.current.value) ||
      !validateDate(dateRef.current.value) ||
      !validateTime(timeRef.current.value) ||
      !validateImage(imageRef.current.value) ||
      !validatePlaneType(planeTypeRef.current.value) ||
      !validateDescription(descriptionRef.current.value) ||
      !validatePrice(priceRef.current.value)
    ) {
        Swal.fire(
          'Ooop!!','Algun dato es invalido','Error'
        );
        return;
    }

    const serviceUpdate = {
        nameService: nameServiceRef.current.value,
        nameTeacher: nameTeacherRef.current.value,
        date: dateRef.current.value,
        time: timeRef.current.value,
        image: imageRef.current.value,
        planeType: planeTypeRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
    };

    Swal.fire({
        title: "¿Estas seguro?",
        text: "¡No podras revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, Actualizar!",
    }).then(async (result)=>{
        if (result.isConfirmed){
            try {
                const res = await axios.put(`${URL}/${id}`, serviceUpdate);
                if(res.status === STATUS.STATUS_OK){
                    Swal.fire(
                        "¡Actualizado!",
                        "El servicio ha sido actualizado.",
                        "success"
                    );
                    getApi();
                    navigate("/service/table");
                }
            } catch (error) {
                
            }
        }
    })
  };

  return(
    <div>
        <Container className="py-5">
            <h1>Producto editado</h1>
            <hr />
        </Container>
    </div>
  );
};