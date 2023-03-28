import { Adress } from '../../components/adress/Adress';
import { useParams } from 'react-router-dom';
import { Product } from '../../models/IProduct';
import { useState, useEffect } from 'react';
import { addCatalogProduct } from '../../store/reducers/cartSlice';
import { useAppDispatch } from '../../hooks/redux';
import db from '../../db.json';
import shareSvg from '../../assets/share.svg';
import priceSvg from '../../assets/price-black.svg';
import { useMediaQuery } from '@chakra-ui/react';
import { Header } from '../../components/header/Header';
import { HeaderMobile } from '../../components/headerMobile/HeaderMobile';

const Item = () => {
  const { uid } = useParams();
  const dispatch = useAppDispatch();
  const [item, setItem] = useState<Product[]>([]);
  const uidProperty: number = +uid!;

  const costPerOne: number = db.filter((obj: Product) => {
    return obj.uid === uidProperty;
  })[0].price;

  useEffect(() => {
    let res = db.filter((obj: Product) => {
      return obj.uid === uidProperty;
    });

    return setItem(res);
  }, [uidProperty]);

  const plusItem = () => {
    const obj = { ...item[0] };
    obj.count++;
    obj.price = obj.price + costPerOne;
    setItem([obj]);
  };

  const minusItem = () => {
    const obj = { ...item[0] };
    if (obj.count > 1) {
      obj.count = obj.count - 1;
      obj.price = obj.price - costPerOne;
      setItem([obj]);
    }
  };

  const addItem = (obj: Product) => {
    dispatch(addCatalogProduct(obj));
  };

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <div className="wrapper">
      {isLargerThan1200 ? <Header /> : <HeaderMobile />}
      <Adress />
      {item.map((obj, id) => {
        return (
          <div className="item" key={id}>
            <div className="item__image-wrapper">
              <img className="item__image" src={obj.url} alt="item" />
            </div>
            <div className="item__desc">
              <div className="item__title">
                <span>{obj.name}</span> {obj.desc}
              </div>
              <div className="item__type">
                <div
                  className={`item__type_${obj.type === 'л' ? 'litr' : 'kg'}`}
                ></div>
                {obj.typeValue} {obj.type}
              </div>
              <div className="item__actions">
                <span className="item__cost">{obj.price}</span>
                <div className="count">
                  <button className="count__btn" onClick={() => minusItem()}>
                    -
                  </button>
                  <span>{obj.count}</span>
                  <button className="count__btn" onClick={() => plusItem()}>
                    +
                  </button>
                </div>
                <div className="add">
                  <button className="add__btn" onClick={() => addItem(obj)}>
                    В корзину
                  </button>
                  <span className="add__btn_icon"></span>
                </div>
              </div>
              <div className="share">
                <button className="share__icon">
                  <img src={shareSvg} alt="share" />
                </button>
                <button className="share__promocode">
                  При покупке от <span>10 000 ₸</span> бесплатная <br />
                  доставка по Кокчетаву и области
                </button>
                <button className="share__price-list">
                  Прайс-лист
                  <img src={priceSvg} alt="price" />
                </button>
              </div>
              <ul className="details-list">
                <li className="details-list__item">
                  Производитель:<span>{obj.productedBy}</span>
                </li>
                <li className="details-list__item">
                  Бренд:<span>{obj.brand}</span>
                </li>
                <li className="details-list__item">
                  Артикул:<span>{obj.uid}</span>
                </li>
                <li className="details-list__item">
                  Штрихкод:<span>{obj.uid}</span>
                </li>
              </ul>
              <div className="desc">
                <button className="desc__action">Описание</button>
                <p className="desc__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                  Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                  consectetur aliquet sed pellentesque consequat consectetur
                  congue mauris venenatis. Nunc elit, dignissim sed nulla
                  ullamcorper enim, malesuada.
                </p>
                <button className="desc__line"></button>
              </div>
              <div className="details">
                <button className="desc__action">Характериситики</button>
                <ul className="details-list">
                  <li className="details-list__item">
                    Назначение:<span>{obj.name}</span>
                  </li>
                  <li className="details-list__item">
                    Тип:<span>{obj.type}</span>
                  </li>
                  <li className="details-list__item">
                    Производитель:<span>{obj.productedBy}</span>
                  </li>
                  <li className="details-list__item">
                    Бренд:<span>{obj.brand}</span>
                  </li>
                  <li className="details-list__item">
                    Артикул:<span>{obj.uid}</span>
                  </li>
                  <li className="details-list__item">
                    Штрихкод:<span>{obj.uid}</span>
                  </li>
                  <li className="details-list__item">
                    Вес:
                    <span>
                      {obj.typeValue} {obj.type}
                    </span>
                  </li>
                  <li className="details-list__item">
                    Объем:
                    <span>
                      {obj.typeValue} {obj.type}
                    </span>
                  </li>
                  <li className="details-list__item">
                    Кол-во:<span>{obj.typeValue} шт</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Item };
