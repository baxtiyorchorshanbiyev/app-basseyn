import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../sass/navbar.scss';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
const languages = [
  {
    code: 'Ru',
    name: 'Русский',
    country_code: 'ru'
  },
  {
    code: 'Uz',
    name: 'Uzbek',
    country_code: 'uz'
  },
]

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };
  const {t} = useTranslation()
  useEffect ( () =>{
    document.title = t('title')
  }, [t])
  const closeMobileMenu = () => setClick(false);
  const changeBackground = () => {
    if(window.scrollY >= 20){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand"><img src="./images/logo2.svg" alt="Logo" /> <span className="basseyn">BASSEYN</span></Link>
          <div className="menu-content">
            <div className="feedback">
              <a className="phone" href="tel:+99899 4444448">+99899 4444448</a>
              <a className="feedback-link" href="#!">{t('navbar_title')}</a>
            </div>
            <div className="menu-item">
              <div className="lang">
              {
                languages.map(({code, name, country_code}) =>{
                  return  <button className="lang-btn " type="button"  onClick={() =>{
                      i18next.changeLanguage(code)
                    }} >{code}</button>
                })
              }
              
              </div>
              <div className="menu-icon" onClick={handleClick}>
              
              </div>
            </div>
          </div>
        <div className={click? 'sidebar-active' : 'sidebar'}>
        <div className="nav-item-logo" onClick={handleClick}>
        <i class='bx bx-x bx-tada' ></i></div>
        <ul className={'nav-menu'}>
          <li className="nav-item"><Link to="/catalog" onClick={handleClick} className="nav-link"> Каталог</Link></li>
          <li className="nav-item"><Link to="/about" onClick={handleClick}
            className="nav-link">О нас</Link></li>
          <li className="nav-item"><Link to="/services" onClick={handleClick}  className="nav-link">Услуги</Link></li>
          <li className="nav-item"><Link to="/work" onClick={handleClick}  className="nav-link">Наши работы</Link></li>
          <li className="nav-item"><Link to="/comment" onClick={handleClick} className="nav-link">Отзывы</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={handleClick} className="nav-link">Контакты</Link></li>
        </ul>
        <div className="sidebar-logo">
          <Link to={"/"}><img src="./images/sidebar-logo.svg" onClick={handleClick} alt="SideBarlogo" /></Link>
        </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
