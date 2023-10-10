import { Container, Row, Col, NavLink } from "react-bootstrap";

const FooterComponent = () =>{
 return(
    <div className="footer">
        <Container>
            <Row>
                <Col lg="6">
                    <h3 className="fw-bold">Ngode.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet debitis minus, excepturi assumenda consequatur adipisci labore enim? Consequuntur, consectetur?</p>
                </Col>
                <Col className="d-flex flex-column col-lg-3 col">
                    <h5 className="fw-bold">Menu</h5>
                    <NavLink to="">Home</NavLink>
                    <NavLink to="kelas">Kelas</NavLink>
                    <NavLink to="">Testimonial</NavLink>
                    <NavLink to="">FAQ</NavLink>
                    <NavLink to="">Syarat & Ketentuan</NavLink>
                </Col>
                <Col className="d-flex flex-column col-lg-3 col">
                    <h5 className="fw-bold">Resources</h5>
                    <NavLink to="">Karir HandBook</NavLink>
                    <NavLink to="kelas">Student Rewads</NavLink>
                    <NavLink to="">Free Ebooks</NavLink>
                </Col>
            </Row>
            <Row className="mt-5">
                <span className="text-center"> Develompent By © 2023 Dadi Farisa</span>
            </Row>
        </Container>
    </div>
 );
}

export default FooterComponent;