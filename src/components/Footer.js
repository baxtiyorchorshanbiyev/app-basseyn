import React from 'react';
import '../sass/footer.scss';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="line"></div>
        <div className="footer-container">
          <div className="row footer-up">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 logo-content">
          <Link to="/" className="navbar-brand"><img src="./images/logo2.svg" alt="Logo" /> <span className="basseyn">BASSEYN</span></Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 insta-content">
            <a href="#!" className="insta">
            <i class='bx bxl-instagram bx-burst' ></i>
            </a>
            <a href="#!" className="insta-text">Instagram</a>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 phone-content">
            <a className="phone-number-icon" href="tel:+99899 4444448">
            <i class='bx bx-phone bx-burst' ></i>
            </a>
            <a className="phone-number" href="tel:+99899 4444448">+99899 4444448</a>
          </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="footer-container footer-past">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <h4>Главная страница</h4>
              <ul>
                <li><a className="#!">Услуги</a></li>
                <li><a className="#!">Почему мы?</a></li>
                <li><a className="#!">Наши работы</a></li>
                <li><a className="#!">Отзывы</a></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <h4>Услуги</h4>
              <ul>
                <li><a className="#!">Открытые и закрытые бассейны</a></li>
                <li><a className="#!">Фонтаны</a></li>
                <li><a className="#!">Консервация</a></li>
                <li><a className="#!">Чистка бассейнов</a></li>
              </ul>
            </div>
            <div className="col-xl-6">
            <div className="send-message">
                    <h5>Оставить заявку</h5>
                    <form >
                    <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-2">
                     <input required className="name" type="text" placeholder="Имя" />
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-2">
                    <input  required className="phone-number" type="number" placeholder="Тел-номер" />
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 my-2">
                    <button className="send" type="submit">Отправить</button>
                     </div>
                    </div>
                    
                    </form>
            </div>
            </div>
          </div>
          <div className="copyright">
            <h3>&copy;2021 <span>Sudex 2021-2022.</span> Все права защищены.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;