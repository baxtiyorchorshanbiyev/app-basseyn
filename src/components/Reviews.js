import React from 'react';
import Slider from 'react-slick';
import "../sass/reviews.scss"
const Reviews = () => {
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
      <div className="reviews">
        <div className="reviews-container">
        <div className="catalog-title">
            <h1>
            Отзывы
            </h1>
        </div>
        <Slider {...settings}>
          <div className="carousel carousel-one">
          <div className="carousel-img">
            <img src="./images/carousel-img-01.png" alt="Eror" />
          </div>
          <div className="carousel-text"> 
              Цитаты из отзывов демонстрируют поддержку вашего продукта или функции со стороны пользователя, имеющего опыт работы с ними. Это может быть значительно более эффективным, чем традиционные методы рекламы, поскольку большинство потребителей доверяет им.
          </div>
          <div className="carousel-stars">
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
          </div>
          </div>
          <div className="carousel carousel-one">
          <div className="carousel-img">
            <img src="./images/carousel-img-01.png" alt="Eror" />
          </div>
          <div className="carousel-text"> 
              Цитаты из отзывов демонстрируют поддержку вашего продукта или функции со стороны пользователя, имеющего опыт работы с ними. Это может быть значительно более эффективным, чем традиционные методы рекламы, поскольку большинство потребителей доверяет им.
          </div>
          <div className="carousel-stars">
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
          </div>
          </div>
          <div className="carousel carousel-one">
          <div className="carousel-img">
            <img src="./images/carousel-img-01.png" alt="Eror" />
          </div>
          <div className="carousel-text"> 
              Цитаты из отзывов демонстрируют поддержку вашего продукта или функции со стороны пользователя, имеющего опыт работы с ними. Это может быть значительно более эффективным, чем традиционные методы рекламы, поскольку большинство потребителей доверяет им.
          </div>
          <div className="carousel-stars">
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
          </div>
          </div>
          <div className="carousel carousel-one">
          <div className="carousel-img">
            <img src="./images/carousel-img-01.png" alt="Eror" />
          </div>
          <div className="carousel-text"> 
              Цитаты из отзывов демонстрируют поддержку вашего продукта или функции со стороны пользователя, имеющего опыт работы с ними. Это может быть значительно более эффективным, чем традиционные методы рекламы, поскольку большинство потребителей доверяет им.
          </div>
          <div className="carousel-stars">
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
            <span><img className="stars" src="./images/stars.svg" alt="start"/></span>
          </div>
          </div>
        </Slider>
        <div className="feedback">
          <a className="feedback-link" href="#!">Оставить отзыв</a>
        </div>
        </div>
      </div> 
    </>
  );
};

export default Reviews;