import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const URL = process.env.REACT_APP_Apex_Gym;

    useEffect(()=>{
        getUsersById();
    }, []);

    const getUsersById = async () =>{
        try {
            const res = await fetch(`${URL}/users/${id}`);
            const userApi = await res.json();
            setUser(userApi);
        } catch {
            
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
                    src={user.image}
                    />
                 </Card>
                </Col>
                <Col>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>{user.nameUser}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>{user.lastNameUser}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{user.email}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{user.phone}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{user.password}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{user.classes}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{user.contractedPlan}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>$ {user.roll}</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserDetails;