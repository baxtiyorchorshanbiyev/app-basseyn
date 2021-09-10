import React from 'react';
import "../sass/services.scss";
import Slider from 'react-slick';
const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
      <div className="services">
        <div className="services-container">
        <div className="catalog-title">
            <h1>
            Услуги
            </h1>
            <span className="underline"></span>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mobile-card-on">
              <Slider {...settings}>
                <div className="card">
                  <img className="card-image" src="/images/uslug-01.png" alt="" />
                  <div className="card-body">
                  <p>
                  Строительство и обслуживание бассейнов
                  Открытые и закрытые бассейны по вашему вкусу (аксессуары)
                  </p>
                  </div>
                  
                </div>
                 <div className="card">
                  <img className="card-image" src="/images/uslug-01.png" alt="" />
                  <div className="card-body">
                  <p>
                  Строительство и обслуживание бассейнов
                  Открытые и закрытые бассейны по вашему вкусу (аксессуары)
                  </p>
                  </div>
                  
                </div>
              </Slider>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mobile-card">
                <div className="card">
                  <img className="card-image" src="/images/uslug-01.png" alt="" />
                  <div className="card-body">
                  <p>
                  Строительство и обслуживание бассейнов
                  Открытые и закрытые бассейны по вашему вкусу (аксессуары)
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mobile-card">
                <div className="card">
                  <img className="card-image" src="/images/uslug-02.png" alt="" />
                  <div className="card-body">
                  <p>
                  Стильные, красивые, устойчивые
                  фонтаны вашего вкуса
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mobile-card">
                <div className="card">
                  <img className="card-image" src="/images/uslug-03.png" alt="" />
                  <div className="card-body">
                  <p>
                  Консервация басейнов 
                  по Узбекистану
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mobile-card">
                <div className="card">
                  <img className="card-image" src="/images/uslug-04.png" alt="" />
                  <div className="card-body">
                  <p>
                  Чистка бассейнов
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;