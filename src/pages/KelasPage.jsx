import { kelasTerbaru } from "../data/index";
import { Container, Row, Col } from "react-bootstrap";

function KelasPage() {
  return (
      <div className="kelas w-100 min-vh-100">
      <Container>
      <Row>
          <Col>
            <h1 className="text-center fw-bold">Kelas Terbaru</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
      <Row className="card-body mt-5">
      {kelasTerbaru.map((kelas) => {
        return(
          <Col key={kelas.id}>
              <img src={kelas.image} alt="unplash.com" className="w-100" />
              <div className="start mb-2 mt-2">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
              </div>
              <div>
                <h5>{kelas.title}</h5>
                <h6>{kelas.price}</h6>
                <button className="mt-3 mb-3">{kelas.buy}</button>
              </div>
          </Col>    
        );
      })}
      </Row>
  </Container>
      </div>
  )
}

export default KelasPage;