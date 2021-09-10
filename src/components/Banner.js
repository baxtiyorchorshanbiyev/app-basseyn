import React,{useState, useEffect} from 'react';
import '../sass/banner.scss';
import {AiOutlineInstagram} from 'react-icons/ai';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
const Banner = () => {
  const {t} = useTranslation()
  useEffect ( () =>{
    document.title = t('title')
  }, [t])
  return (
    <>
    <div className="banner">
      <div className="banner-container">
        <div className="banner-text">
        <h2>
          Строительство и обслуживание 
          бассейнов
          </h2>
          <p>
          {t('banner_title_text')}
          </p>
          <div className="social-link">
            <a className="social instagram" href="#!">
              <span className="instagram-icon">
                <AiOutlineInstagram />
              </span>
            Instagram
            </a>
            <a className="social chat" href="#!">
            Начать чат
            </a>
          </div>
        </div>
      </div>
      <div className="banner-center-img">
        <img src="./images/banner-border-yoq.png" alt="Eror" />
      </div>
      <div className="banner-container banner-container-2">
        <div className="banner-text banner-text-2">
        <div className="stats">
            <div className="stats-title">
              <h4>241</h4>
              <h5>Клиентов</h5>
            </div>
            <div className="line"></div>
            <div  className="stats-title">
              <h4>257</h4>
              <h5>Бассейнов</h5>
            </div>
            <div className="line"></div>
            <div className="stats-title">
              <h4>2015</h4>
              <h5>Основан</h5>
            </div>
            <div className="line line-fontan"></div>
            <div className="stats-title stats-title-fontan">
              <h4 >125</h4>
              <h5>Фонтан</h5>
            </div>
            <div className="ellipse">
            <img src="./images/ellipse.png" alt="Eror" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-left-img">
        <img src="./images/banner-border-bor.png" alt="banner-img" />
      </div>
    </div>
    </>
  );
};

export default Banner;