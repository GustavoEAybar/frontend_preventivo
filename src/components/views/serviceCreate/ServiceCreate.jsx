import { Alert, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateNameService, validateNameTeacher, validateDate, validateTime, validateImage, validateDescription, validatePlaneType, validatePrice } from '../../../helpers/validateFields';
import { STATUS } from '../../../constants';
import Swal from 'sweetalert2';
import axios from '../../../config/axiosInit';

const ServiceCreate = ({ URL, getApi }) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setInputs((prevValues) => ({...prevValues, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs.date);
        console.log(inputs.time);
        if (
          !validateNameService(inputs.nameService) ||
          !validateNameTeacher(inputs.nameTeacher) ||
          !validateDate(inputs.date) ||
          !validateTime(inputs.time) ||
          !validateImage(inputs.image) ||
          !validatePlaneType(inputs.planeType) ||
          !validateDescription(inputs.description) ||
          !validatePrice(inputs.price)
        ) {
            Swal.fire('Oop!!', 'Algun dato es invalido', 'Error');
            return;
        }

        const newService = {
            nameService: inputs.nameService,
            nameTeacher: inputs.nameTeacher,
            date: inputs.date,
            time: inputs.time,
            image: inputs.image,
            planeType: inputs.planeType,
            description: inputs.description,
            price: inputs.price,
        };

        Swal.fire({
            title: '¿Estas seguro?',
            text: '¡No podras revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Crear!',
        }).then(async (result) => {
            if (result.isConfirmed){
                try {
                    const res = await axios.post(URL, newService,{
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': JSON.parse(localStorage.getItem('user-token')).token,
                        },
                    });
                    if (res.status === STATUS.STATUS_CREATED){
                        Swal.fire(
                            '¡Creado!',
                            'El servicio ha sido creado.',
                          'success'
                        );
                        getApi();
                        navigate('/service/table');
                    }
                } catch (error) {
                    error.response.data?.message && error.response.data.errors?.map((error) => setErrorMessage(error.msg));
                    setShow(true);
                };
            }
        });
    }

    return (
        <div>
            <Container className='py-5'>
                <h1>crear servicio</h1>
                <hr />
                <Form className="my-5" onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Nombre del servicio</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Nombre del servicio'
                            name='nameService'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Nombre del profesor</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Nombre del profesor'
                            name='nameTeacher'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                            type = 'date'
                            placeholder = 'Fecha'
                            name='date'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Hora</Form.Label>
                        <Form.Control
                            type = 'time'
                            placeholder = 'Hora'
                            name='time'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Imagen'
                            name='image'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Tipo de vuelo</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Tipo de vuelo'
                            name='planeType'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Descripcion'
                            name='description'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId = 'formBasicEmail'>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type = 'text'
                            placeholder = 'Precio'
                            name='price'
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <div className="text-end">
                        <button className="btn btn-primary">Crear</button>
                    </div>
                    </Form>
                    {show && (
                        <Alert
                        key={errorMessage}
                        variant='danger'
                        onClose={()=> setShow(false)}
                        dismissible>{errorMessage}</Alert>
                    )}
            </Container>
        </div>
    );
};

export default ServiceCreate;