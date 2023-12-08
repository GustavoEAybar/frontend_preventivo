/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const URL = process.env.REACT_APP_Apex_Gym;
    
    useEffect(() => {
        getServisById();
    }, []);
    const getServisById = async () => {
        try {
            const res = await fetch(`${URL}/services/${id}`);
            const servicesApi = await res.json();
            setService(servicesApi);
        } catch (error) {
            
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                 <Card className='my-4'>
                    <Card.Img
                    className='img-fluid'
                    variant='top'
                    src={service.image}
                    />
                 </Card>
                </Col>
                <Col>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>{service.nameService}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>{service.nameTeacher}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{service.date}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{service.time}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{service.planeType}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{service.description}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>$ {service.price}</Card.Subtitle>
                        <div>
                            <Link 
                            to='/services/confirm'
                            className='btn btn-primary mx-1 text-decoration-none text-center'>Comprar</Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ServiceDetails;