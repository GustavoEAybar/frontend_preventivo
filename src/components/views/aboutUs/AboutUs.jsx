import { Col, Container, Row } from "react-bootstrap";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className="d-block p-2 text-bg-warning text-center">Aybar, Gustavo Exequiel</h2>
            <svg
              width="150"
              height="200"
              className="border border-warning  border-5 rounded mx-auto d-block m-3"
            >
              <image
                href="/images/perfil.jpg"
                height="200"
                width="150"
                alt="logo de apex"
                className="img-fluid rounded float-start"
              />
            </svg>
          </div>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Sobre mi</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ex modi corporis laudantium soluta eos optio voluptas minima voluptates minus, sit a nam expedita unde, voluptate odit voluptatibus deserunt assumenda rem eum harum iste! Sint explicabo labore vitae neque error rem sequi ut maxime minima saepe, vero repudiandae at deleniti.</p>
          </div>
        </Col>
        <Col>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Motivaciones</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempora nisi aperiam iste ad iure dicta tenetur non totam voluptas doloribus rem amet sapiente perspiciatis, fuga optio harum laborum officia voluptatem id aliquid fugit libero. Perferendis, saepe alias? Similique voluptate reprehenderit eos aliquid eius placeat? Cupiditate iste vitae reprehenderit sit!</p>
          </div>
          <div>
          <h2 className="d-block p-2 text-bg-warning text-center">Metas</h2>
          <p className="text-light text-break fs-3 fw-bold lh-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, consequatur, ab repellat quod aliquam quibusdam minus illo tenetur doloribus sapiente totam architecto nemo suscipit omnis explicabo sunt dolore porro quas blanditiis. Libero velit a, autem explicabo aperiam, ducimus ea, sed possimus laborum cum earum quaerat placeat assumenda quibusdam minima sit.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
