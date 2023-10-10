import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import FaqComponent from "../components/FaqComponent";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {
    let navigate = useNavigate();
  return (
    <div className="home-page">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
                <h1 className="">Temukan Bakat Kretifitas Anda Bersama <strong>Ngode.</strong></h1>
                <p>Pelajari beragam skill agar kamu siap kerja dan bersiaplah untuk bersaing menjadi seorang professional di perusahaan impianmu!.</p>
                <button className="btn-bg mt-2">Lihat Kelas</button>
                <button className="btn-in mx-2 mt-2">Lihat Promo</button>
            </Col>
            <Col lg="6">
                <img src={HeroImage} alt=""/>
            </Col>
          </Row>
        </Container>
      </header>
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
            <Row>
              <Col className="text-center mt-5">
                <button className="btn-items" onClick={() => navigate("/kelas")}>Lihat Semua Kelas <i class="fa-solid fa-chevron-right"></i></button>
              </Col>
            </Row>
      </Container>
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
      </div>
     {/* FAQ Page */}
      <FaqComponent />               
     {/* FAQ Page */}               
    </div>
  )
};

export default HomePage;