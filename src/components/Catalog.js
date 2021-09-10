import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../sass/catalog.scss';
const Catalog = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const [rangeval, setRangeval] = useState(null);
  const [rangeval1, setRangeval1] = useState(null);
  const [rangeval2, setRangeval2] = useState(null);
  return (
    <>
      <div className="catalog">
        <div className="catalog-container">
          <div className="catalog-title">
            <h1>
              Каталог
            </h1>
            <span className="underline"></span>
          </div>
          <Nav tabs>
            <div className="catalog-container-tab">
              <div onClick={handleClick} className={click ? 'active-one-tabs' : "let1"}>
                <div className={{ active: activeTab === '1' }}
                  onClick={() => { toggle('1'); }}>
                  <div className="catalog-tab">
                    <img src="./images/catalog-img-01.png" alt="" />
                    <div className="layer">Бассейн</div>
                  </div>
                </div>
              </div>
              <div onClick={handleClick} className={click ? 'active-two-tabs' : "let2"}>
                <div className={{ active: activeTab === '2' }}
                  onClick={() => { toggle('2'); }}>
                  <div className="catalog-tab">
                    <img src="./images/catalog-img-02.png" alt="" />
                    <div className="layer">Фонтан</div>
                  </div>
                </div>
              </div>
            </div>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="tabpaneOne">
                <form>
                <div className="row tabpaneOneContent">
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12  content">
                    <h3>Материял</h3>
                    <ul>
                      <li>
                        <input className="checkbox" id="Камни" type="checkbox" />
                        <label htmlFor="Камни">Камни</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Пленка" type="checkbox" />
                        <label htmlFor="Пленка">Пленка</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Плитки" type="checkbox" />
                        <label htmlFor="Плитки">Плитки</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Плитки(узор)" type="checkbox" />
                        <label htmlFor="Плитки(узор)">Плитки(узор)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12   content">
                    <h3>Форма</h3>
                    <ul>
                      <li>
                        <input className="checkbox" id="Прямоугольник" type="checkbox" />
                        <label htmlFor="Прямоугольник">Прямоугольник</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Другое" type="checkbox" />
                        <label htmlFor="Другое">Другое</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12 content">
                    <h3>Стиль</h3>
                    <ul>
                      <li>
                        <input className="checkbox" id="Современный" type="checkbox" />
                        <label htmlFor="Современный">Современный</label>
                      </li>
                      <li>
                        <input  className="checkbox" id="Исторический" type="checkbox" />
                        <label htmlFor="Исторический">Исторический</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12  content">
                    <h3>
                      Глубина
                    </h3>
                    <div className="range">
                    <span className="natija">
                    {rangeval} m
                    </span>
                    <span className="fade-up"><img src="/images/pastga.svg" alt="eror"/></span>
                    </div>
                    <input type="range" min="1" max="9" step="1"
                      onChange={(event) => setRangeval(event.target.value)} />
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12  content">
                    <h3>
                      Ширина
                    </h3>
                    <div className="range">
                    <span className="natija">{rangeval1} m</span>
                    <span className="fade-up"><img src="./images/pastga.svg" alt=""/></span>
                    </div>
                    <input type="range" min="1" max="9" step="1"
                      onChange={(event) => setRangeval1(event.target.value)} />
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12   content">
                    <h3>
                      Длина
                    </h3>
                    <div className="range">
                    <span className="natija">{rangeval2} m</span>
                    <span className="fade-up"><img src="./images/pastga.svg" alt=""/></span>
                    </div>
                    <input type="range" min="1" max="9" step="1"
                      onChange={(event) => setRangeval2(event.target.value)} />
                  </div>
                  
                  </div>
                  <div className="phone">
                    <h5>Оставить заявку</h5>
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <input required className="name-cat" type="text" placeholder="Имя" />
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <input  required className="phone-number-cat" type="number" placeholder="Тел-номер" />
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <button className="send-cat" type="submit">Отправить</button> 
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="tabpanetwo">
                <form >
                <div className="row tabpaneTwoContent">
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 content">
                    <h3>Материял</h3>
                    <ul>
                      <li>
                        <input className="checkbox" id="Камни" type="checkbox" />
                        <label htmlFor="Камни">Камни</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Пленка" type="checkbox" />
                        <label htmlFor="Пленка">Пленка</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Плитки" type="checkbox" />
                        <label htmlFor="Плитки">Плитки</label>
                      </li>
                      <li>
                        <input className="checkbox" id="Плитки(узор)" type="checkbox" />
                        <label htmlFor="Плитки(узор)">Плитки(узор)</label>
                      </li>
                    </ul>
                  </div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 content">
                    <h3>Стиль</h3>
                    <ul>
                      <li>
                        <input className="checkbox" id="Современный" type="checkbox" />
                        <label htmlFor="Современный">Современный</label>
                      </li>
                      <li>
                        <input  className="checkbox" id="Исторический" type="checkbox" />
                        <label htmlFor="Исторический">Исторический</label>
                      </li>
                      <li>
                        <input  className="checkbox" id="Классический" type="checkbox" />
                        <label htmlFor="Классический">Классический</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 px-0 phone">
                    <h5>Оставить заявку</h5>
                    <input required className="name" type="text" placeholder="Имя" />
                    <input  required className="phone-number" type="number" placeholder="Тел-номер" />
                    <button className="send" type="submit">Отправить</button>
                  </div>
                </form>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </>
  );
};

export default Catalog;