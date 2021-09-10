import React from 'react';
import "../sass/comment.scss";
const Comment = () => {
  return (
    <>
      <div className="comment">
        <div className="comment-container">
        <div className="catalog-title">
            <h1>
            Наши работы
            </h1>
            <span className="underline">
              <img src="./images/underline.png" alt="Eror" />
            </span>

          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-title">
                    <span className="card-title-counter">01</span>
                    <span className="card-title-text">Гидроизоляция для бассейна</span>
                  </div>
                  <img src="./images/nash-01.png" alt="Eror" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-title">
                    <span className="card-title-counter">02</span>
                    <span className="card-title-text">Переливной бассейн</span>
                  </div>
                  <img src="./images/nash-02.png" alt="Eror" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-title">
                    <span className="card-title-counter">03</span>
                    <span className="card-title-text">Уличный бассейн</span>
                  </div>
                  <img src="./images/nash-03.png" alt="Eror" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-title">
                    <span className="card-title-counter">04</span>
                    <span className="card-title-text">Закрытый бассейн</span>
                  </div>
                  <img src="./images/nash-04.png" alt="Eror" />
                </div>
              </div>
              <div className="col-xl-12 again-content">
                <button type="button" className="again">Показать еще</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;