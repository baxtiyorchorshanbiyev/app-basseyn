import React from 'react';
import {MdLocalPhone} from 'react-icons/md';
import '../sass/contact.scss'
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
        <div className="catalog-title">
            <h1>
            Контакты
            </h1>
        </div>
        <div className="get-touch">
          <h4>
          Время звонка;  8:00-23:00
          </h4>
          <div className="row get-touch-phone">
            <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="phone phone-one">
              <a className="phone-number-left" href="tel:+99899 4444448">+99899 444 44 48</a>
              <a className="phone-number-right" href="tel:+99899 4444448">
                <span className="phone-icon">
                <i class='bx bxs-phone bx-tada' ></i>
                </span>
              </a></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="phone phone-two">
               <a className="phone-number-left" href="tel:+99899 4444448">+998 90 929 64 79</a>
              <a className="phone-number-right" href="tel:+99899 4444448">
                <span className="phone-icon">
                <i class='bx bxs-phone bx-tada' ></i>
                </span>
              </a>
              </div>
            </div>
          </div>
          <form >
          <div className="send-message">
                    <h5>Оставить заявку</h5>
                    <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 my-2">
                    <input required className="name" type="text" placeholder="Имя" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 my-2">
                    <input  required className="phone-number" type="number" placeholder="Тел-номер" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 my-2">
                    <button className="send" type="submit">Отправить</button>
                    </div>
                    </div>
            </div>
          </form>
          <a className="write-instagram" href="#!">Написать в Инстаграм</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;