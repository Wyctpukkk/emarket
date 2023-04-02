import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { Product } from '../../models/IProduct';

const Header = () => {
  interface cartState {
    arrayOfItems: Product[];
    totalItems: number;
    totalPrice: number;
  }

  const state: cartState = useAppSelector((state) => state.cartReducer);
  const totalPrice = state.totalPrice;
  const totalItems = state.totalItems;

  return (
    <header className="header">
      <div className="wrapper">
        <article className="upheader">
          <ul className="upheader__contacts">
            <li className="upheader__place">
              <div className="upheader__place_img"></div>
              <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
              <br />
              <span>(Рынок Восточный)</span>
            </li>
            <li className="upheader__email">
              <div className="upheader__email_img"></div>
              <span> opt.sultan@mail.ru</span>
              <br />
              <span>На связи в любое время</span>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav__item">
              <a className="nav__link" href="#">
                О компании
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Доставка и оплата
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Возврат
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </article>
      </div>
      <span className="line"></span>
      <div className="wrapper">
        <article className="downheader">
          <Link to={'/admin'} className="downheader__logotype"></Link>
          <button className="downheader__catalog">
            Каталог
            <span className="downheader__catalog_icon"></span>
          </button>
          <div className="downheader__search">
            <input className="downheader__input" placeholder="Поиск..."></input>
            <button className="downheader__search-btn"></button>
            <div className="downheader__search-icon"></div>
          </div>
          <div className="downheader__support">
            <div className="downheader__support-text">
              <span>+7 (777) 490-00-91</span>
              <span>время работы: 9:00-20:00</span>
              <span>Заказать звонок</span>
            </div>
            <div className="downheader__support-img"></div>
          </div>
          <button className="downheader__price-list">
            Прайс-лист
            <span className="downheader__price-list_icon"></span>
          </button>
          <div className="downheader__cart">
            <Link to={'cart'} className="downheader__cart-link">
              <span className="downheader__cart-link_img"></span>
              <span className="downheader__cart-link_count">{totalItems}</span>
            </Link>
            <div className="downheader__cart-info">
              Корзина
              <br />
              <span>{totalPrice} ₸</span>
            </div>
          </div>
        </article>
      </div>
      <span className="line2"></span>
    </header>
  );
};

export { Header };
