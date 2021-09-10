import React from 'react';
import "../sass/work.scss";
import {
  Player,
  BigPlayButton,
} from 'video-react';
const Work = () => {
  return (
    <>
      <div className="work">
        <div className="work-container">
          <div className="catalog-title">
            <h1>
              Почему мы?
            </h1>
            <span className="underline"></span>

          </div>
          <div className="row work-head-content">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="layer">
          <Player width="100%" poster="./images/nima-uchun-border-yoq.png">
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                    <BigPlayButton position="center" />
                  </Player>
          </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="work-content">
              <div className="content-one">
                <p>
                  Наши товары делают вашу жизнь комфортный, безопасный и презентабильной. Высокий уровень заботы и внимания каждому пакупателю
                </p>
                <p className="text-right">
                  -Сергей Совчук (генералбный директор Basseyn.uz)
                </p>
              </div>
              <div className="content">
                <h3>
                  01
                </h3>
                <div>
                  <h5>24/7 оналайн</h5>
                  <h6>Для ванной комнаты, аксессуары, высокий уровень к деталям, разные виды покрытий</h6>
                </div>
              </div>
              <div className="content">
                <h3>
                  03
                </h3>
                <div>
                  <h5>24/7 оналайн</h5>
                  <h6>Для ванной комнаты, аксессуары, высокий уровень к деталям, разные виды покрытий</h6>
                </div>
              </div>
              <div className="content">
                <h3>
                  03
                </h3>
                <div>
                  <h5>24/7 оналайн</h5>
                  <h6>Для ванной комнаты, аксессуары, высокий уровень к деталям, разные виды покрытий</h6>
                </div>
              </div>
              <div className="content">
                <h3>
                  04
                </h3>
                <div>
                  <h5>24/7 оналайн</h5>
                  <h6>Для ванной комнаты, аксессуары, высокий уровень к деталям, разные виды покрытий</h6>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        </div>
        <div className="work-image">
          <img src="/images/nima-uchun.png" alt="Eror" />
        </div>
      </div>
    </>
  );
};

export default Work;