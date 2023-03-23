import db from '../../db.json';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Product } from '../../models/IProduct';

const Cards = () => {
  const [items, setItems] = useState(db);

  const sortProperty: string = useAppSelector(
    (state) => state.sortReducer.sort.sortProperty
  );

  const categoryProperty: number = useAppSelector(
    (state) => state.sortReducer.category
  );

  const searchProperty: string = useAppSelector(
    (state) => state.sortReducer.search
  );

  const minPrice: number = useAppSelector(
    (state) => state.sortReducer.minPrice
  );

  const maxPrice: number = useAppSelector(
    (state) => state.sortReducer.maxPrice
  );

  const brandPropery: string[] = useAppSelector(
    (state) => state.sortReducer.brand
  );

  useEffect(() => {
    if (categoryProperty === 0) {
      setItems(db);
    } else {
      setItems([
        ...db.filter((obj: Product) => {
          return obj.category.includes(categoryProperty);
        }),
      ]);
    }
  }, [categoryProperty]);

  useEffect(() => {
    if (searchProperty === '') {
      setItems(db);
    } else {
      setItems([
        ...db.filter((obj: Product) => {
          return obj.productedBy
            .toLowerCase()
            .includes(searchProperty.toLowerCase());
        }),
      ]);
    }
  }, [searchProperty]);

  useEffect(() => {
    setItems([
      ...db.filter((obj: Product) => {
        return obj.price > minPrice && obj.price < maxPrice;
      }),
    ]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (brandPropery.length === 0) {
      setItems(db);
    } else {
      setItems([
        ...db.filter((obj: Product) => {
          return brandPropery.includes(obj.brand);
        }),
      ]);
    }
  }, [brandPropery]);

  useEffect(() => {
    if (sortProperty === 'priceUp') {
      setItems([
        ...items.sort((a: Product, b: Product) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        }),
      ]);
    } else if (sortProperty === 'priceDown') {
      setItems([
        ...items.sort((a: Product, b: Product) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else if (sortProperty === 'titleDown') {
      setItems([
        ...items.sort((a: Product, b: Product) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
      ]);
    } else if (sortProperty === 'titleUp') {
      setItems([
        ...items.sort((a: Product, b: Product) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
      ]);
    }
  }, [sortProperty]);

  return (
    <div className="cards">
      {items && (
        <ul className="cards__list">
          {items.map((obj, _) => {
            return (
              <li key={obj.uid} className="card">
                <div className="card__image-wrapper">
                  <img className="card__image" src={obj.url} alt="product" />
                  <div className="card__type">
                    <div
                      className={`card__type_${
                        obj.type === 'л' ? 'litr' : 'kg'
                      }`}
                    ></div>
                    {obj.typeValue} {obj.type}
                  </div>
                </div>
                <p className="card__desc">
                  <span className="card__title">{obj.name}</span> {obj.desc}
                </p>
                <ul className="card__details">
                  <li className="card__details_item">
                    Штрихкод:<span>{obj.uid}</span>
                  </li>
                  <li className="card__details_item">
                    Производитель:<span>{obj.productedBy}</span>
                  </li>
                  <li className="card__details_item">
                    Бренд:<span>{obj.brand}</span>
                  </li>
                  <li className="card__details_item">
                    Тип ухода:<span>{obj.category}</span>
                  </li>
                </ul>
                <div className="card__payload">
                  <span className="card__cost">{obj.price} ₸</span>
                  <button className="card__add">В КОРЗИНУ</button>
                  <span className="card__add_icon"></span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Cards };
