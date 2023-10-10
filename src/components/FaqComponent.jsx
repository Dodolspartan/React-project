import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import { faq } from "../data/index";

const FaqComponent = () => {

  return (
    <div className='faq'>
    <Container>
    <Row>
      <Col>
        <h1 className='text-center fw-bold mb-5'>Pertanyaan Sering ditanyakan</h1>
      </Col>
    </Row>
    </Container>
    <Container>
    <Row className='row-cols-lg-2 row-cols-1 g-2'>
    {faq.map((data) =>{
      return(
      <Col key={data.id}>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{data.title}</Accordion.Header>
        <Accordion.Body>
          {data.desc}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>  
      </Col>
      );
    })}
      
    </Row>
    
    </Container>
    </div>
  )
}

export default FaqComponent;