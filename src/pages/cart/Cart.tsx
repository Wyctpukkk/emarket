import { Adress } from '../../components/adress/Adress';
import trashSvg from '../../assets/trash.svg';

const Cart = () => {
  return (
    <div className="wrapper">
      <Adress />
      <p className="cart-title">Корзина</p>
      <ul className="cart-list">
        <li className="cart-list__item">
          <div className="cart-list__image-wrapper">
            <img />
          </div>
        </li>
        <li className="cart-list__item">
          <div className="info">
            <p className="info__name">AOS средство для мытья посуды Crystal</p>
            <p className="info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis.{' '}
            </p>
          </div>
        </li>
        <li className="cart-list__item">
          <button className="cart-list__buttons">-</button>
          <span>1</span>
          <button className="cart-list__buttons">+</button>
        </li>
        <li className="cart-list__item">48,76 ₸</li>
        <li className="cart-list__item">
          <button className="button-delete">
            <img src={trashSvg} alt="delete" />
          </button>
        </li>
      </ul>
      <div className="cart-accept">
        <button className="cart-accept__btn">Оформить заказ</button>
        <span className="cart-accept__total-price">1 348,76 ₸</span>
      </div>
    </div>
  );
};

export { Cart };
