/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const URL = process.env.REACT_APP_Apex_Gym;
    
    useEffect(() => {
        getProductById();
    }, []);
    const getProductById = async () => {
        try {
            const res = await fetch(`${URL}/products/${id}`);
            const productApi = await res.json();
            setProduct(productApi);
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
                    src={product.image}
                    />
                 </Card>
                </Col>
                <Col>
                <Card className='my-4'>
                    <Card.Body>
                        <Card.Title>{product.nameProduct}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>{product.category}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{product.type}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{product.size}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{product.weight}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>{product.description}</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>quedan {product.stock} unidades</Card.Subtitle>
                        <Card.Subtitle className='mb-2 text-muted'>$ {product.price}</Card.Subtitle>
                        <div>
                            <Link 
                            to='/error404'
                            className='btn btn-primary mx-1 text-decoration-none text-center'>Comprar</Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProductDetails;