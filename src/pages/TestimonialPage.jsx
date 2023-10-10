import { Container, Col, Row } from "react-bootstrap";
import { kelasTerbaru, dataSwiper } from "../data/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const TestimonialPage = () => {
  return (
    <div className="testimonial">
              <Container>
                <Row>
                  <Col>
                    <h1 className="text-center fw-bold">Testimonial</h1>
                  </Col>
                </Row>
                <Row>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                  {dataSwiper.map((data) => {
                    return(
                      <SwiperSlide key={data.id}>
                        <p className="desc">{data.desc}</p>
                          <div className="people">
                            <img src={data.image} alt=""/>
                            <div>
                              <h5>{data.name}</h5>
                              <p>{data.skill}</p>
                            </div>
                          </div>
                      </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </Row>
              </Container>
          </div>
  )
}

export default TestimonialPage;