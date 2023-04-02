import { Adress } from '../../components/adress/Adress';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import trashSvg from '../../assets/trash.svg';
import { Product } from '../../models/IProduct';
import {
  addCartProduct,
  clearCart,
  removeOneProduct,
  removeProduct,
} from '../../store/reducers/cartSlice';
import { useMediaQuery } from '@chakra-ui/react';
import { Header } from '../../components/header/Header';
import { HeaderMobile } from '../../components/headerMobile/HeaderMobile';
import { Footer } from '../../components/footer/Footer';

const Cart = () => {
  interface cartState {
    arrayOfItems: Product[];
    totalItems: number;
    totalPrice: number;
  }
  const dispatch = useAppDispatch();

  const state: cartState = useAppSelector((state) => state.cartReducer);
  const arrayOfItems: Product[] = state.arrayOfItems;
  const totalPrice: number = state.totalPrice;

  const addItem = (obj: Product) => {
    dispatch(addCartProduct(obj));
  };

  const delOneItem = (obj: Product) => {
    dispatch(removeOneProduct(obj));
  };

  const delWholeItem = (obj: Product) => {
    dispatch(removeProduct(obj));
  };

  const acceptCart = () => {
    alert('Спасибо за заказ');
    dispatch(clearCart());
  };

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <>
      <div className="wrapper">
        {isLargerThan1200 ? <Header /> : <HeaderMobile />}
        <Adress />
        <p className="cart-title">Корзина</p>
        {arrayOfItems.map((obj, id) => {
          return (
            <ul className="cart-list" key={id}>
              <li className="cart-list__item">
                <div className="cart-list__image-wrapper">
                  <img src={obj.url} alt="item" />
                </div>
              </li>
              <li className="cart-list__item">
                <div className="info">
                  <p className="info__name">
                    <span>{obj.name}</span>
                    {obj.desc}
                  </p>
                  <p className="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam interdum ut justo, vestibulum sagittis iaculis
                    iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.
                  </p>
                </div>
              </li>
              <li className="cart-list__item">
                <div className="cart-list__item_counter">
                  <button
                    className="cart-list__buttons"
                    onClick={() => delOneItem(obj)}
                  >
                    -
                  </button>
                  <span>{obj.count}</span>
                  <button
                    className="cart-list__buttons"
                    onClick={() => addItem(obj)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-list__item_price"> {obj.price} ₸</div>
                <button
                  className="button-delete"
                  onClick={() => delWholeItem(obj)}
                >
                  <img src={trashSvg} alt="delete" />
                </button>
              </li>
            </ul>
          );
        })}

        <div className="cart-accept">
          <button className="cart-accept__btn" onClick={() => acceptCart()}>
            Оформить заказ
          </button>
          <span className="cart-accept__total-price">{totalPrice} ₸</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Cart };
