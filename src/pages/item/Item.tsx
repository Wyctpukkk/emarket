import { Adress } from '../../components/adress/Adress';
import { useParams } from 'react-router-dom';
import { Product } from '../../models/IProduct';
import db from '../../db.json';
import shareSvg from '../../assets/share.svg';
import priceSvg from '../../assets/price-black.svg';

const Item = () => {
  const path = useParams();

  const uidProperty: number = +path.uid!;

  const result = db.filter((obj: Product) => {
    return obj.uid === uidProperty;
  })[0];

  return (
    <div className="wrapper">
      <Adress />
      <div className="item">
        <div className="item__image-wrapper">
          <img className="item__image" src={result.url} alt="item" />
        </div>
        <div className="item__desc">
          <div className="item__title">
            <span>{result.name}</span> {result.desc}
          </div>
          <div className="item__type">
            <div
              className={`item__type_${result.type === 'л' ? 'litr' : 'kg'}`}
            ></div>
            {result.typeValue} {result.type}
          </div>
          <div className="item__actions">
            <span className="item__cost">{result.price}</span>
            <div className="count">
              <button className="count__btn">-</button>
              <span>1</span>
              <button className="count__btn">+</button>
            </div>
            <div className="add">
              <button className="add__btn">В корзину</button>
              <span className="add__btn_icon"></span>
            </div>
          </div>
          <div className="share">
            <button className="share__icon">
              <img src={shareSvg} alt="share" />
            </button>
            <button className="share__promocode">
              При покупке от <span>10 000 ₸</span> бесплатная <br /> доставка по
              Кокчетаву и области
            </button>
            <button className="share__price-list">
              Прайс-лист
              <img src={priceSvg} alt="price" />
            </button>
          </div>
          <ul className="details-list">
            <li className="details-list__item">
              Производитель:<span>{result.productedBy}</span>
            </li>
            <li className="details-list__item">
              Бренд:<span>{result.brand}</span>
            </li>
            <li className="details-list__item">
              Артикул:<span>{result.uid}</span>
            </li>
            <li className="details-list__item">
              Штрихкод:<span>{result.uid}</span>
            </li>
          </ul>
          <div className="desc">
            <button className="desc__action">Описание</button>
            <p className="desc__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis. Faucibus
              consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
              malesuada.
            </p>
            <button className="desc__line"></button>
          </div>
          <div className="details">
            <button className="desc__action">Характериситики</button>
            <ul className="details-list">
              <li className="details-list__item">
                Назначение:<span>{result.name}</span>
              </li>
              <li className="details-list__item">
                Тип:<span>{result.type}</span>
              </li>
              <li className="details-list__item">
                Производитель:<span>{result.productedBy}</span>
              </li>
              <li className="details-list__item">
                Бренд:<span>{result.brand}</span>
              </li>
              <li className="details-list__item">
                Артикул:<span>{result.uid}</span>
              </li>
              <li className="details-list__item">
                Штрихкод:<span>{result.uid}</span>
              </li>
              <li className="details-list__item">
                Вес:
                <span>
                  {result.typeValue} {result.type}
                </span>
              </li>
              <li className="details-list__item">
                Объем:
                <span>
                  {result.typeValue} {result.type}
                </span>
              </li>
              <li className="details-list__item">
                Кол-во:<span>{result.typeValue} шт</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Item };
