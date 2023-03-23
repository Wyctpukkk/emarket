import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setCategory,
  setSearch,
  setMinPrice,
  setMaxPrice,
  setBrand,
} from '../../store/reducers/sortSlice';
import { useEffect, useState } from 'react';
import db from '../../db.json';

const Filter = () => {
  const category = [
    { first: 'Уход', second: 'за телом', categoryProperty: 1 },
    { first: 'Уход', second: 'за руками', categoryProperty: 2 },
    { first: 'Уход', second: 'за ногами', categoryProperty: 3 },
    { first: 'Уход', second: 'за лицом', categoryProperty: 4 },
    { first: 'Уход', second: 'за волосами', categoryProperty: 5 },
    { first: 'Средства', second: 'для загара', categoryProperty: 6 },
    { first: 'Средства', second: 'для бритья', categoryProperty: 7 },
    { first: 'Подарочные', second: 'наборы', categoryProperty: 8 },
    { first: 'Гигиеническая', second: 'продукция', categoryProperty: 9 },
    { first: 'Гигиена', second: 'полости рта', categoryProperty: 10 },
    { first: 'Бумажная', second: 'продукция', categoryProperty: 11 },
  ];
  interface StateProperties {
    brand: string;
    count: number;
  }
  const [massiveOfBrands, setMassiveOfBrands] = useState<StateProperties[]>([]);

  const dispatch = useAppDispatch();

  const categoryProperty: number = useAppSelector(
    (state) => state.sortReducer.category
  );

  const brandProperty: string[] = useAppSelector(
    (state) => state.sortReducer.brand
  );

  const onClickSelected = (id: number) => {
    id === categoryProperty
      ? dispatch(setCategory(0))
      : dispatch(setCategory(id));
  };

  const onChangeSelected = (value: string) => {
    value === '' ? dispatch(setSearch('')) : dispatch(setSearch(value));
  };

  const onChangeMinPriceSelected = (min: number | string) => {
    dispatch(setMinPrice(+min));
  };

  const onChangeMaxPriceSelected = (max: number | string) => {
    dispatch(setMaxPrice(+max));
  };

  const onClickBrandSelected = (value: string) => {
    let array = [...brandProperty];

    if (brandProperty.includes(value)) {
      array = [...array.filter((obj) => obj !== value)];
    } else {
      array.push(value);
    }

    dispatch(setBrand(array));
  };
  console.log(brandProperty);

  useEffect(() => {
    const res = db
      .map((obj, id) => {
        return obj.brand;
      })
      .sort();

    const unicCollection = new Set(res);
    const arr = Array.from(unicCollection);

    const lengths: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      const lengthOfBrand: number = res.filter((obj, id) => {
        return obj === arr[i];
      }).length;
      lengths.push(lengthOfBrand);
    }

    const brandFilter: Array<any> = [];
    const createObj = (key: string, value: number) => {
      brandFilter.push({ brand: key, count: value });
    };
    for (let i = 0; i < arr.length; i++) {
      createObj(arr[i], lengths[i]);
    }
    setMassiveOfBrands(brandFilter);
  }, []);

  return (
    <div className="filter-wrapper">
      <div className="filter">
        <p className="filter__title">ПОДБОР ПО ПАРАМЕТРАМ</p>
        <div className="filter__price">
          <p className="filter__currency">
            Цена <span>₸</span>
          </p>
          <input
            onChange={(e) => {
              onChangeMinPriceSelected(e.target.value);
            }}
            className="filter__from"
            type="number"
            placeholder="0"
          ></input>
          <span>-</span>
          <input
            onChange={(e) => {
              onChangeMaxPriceSelected(e.target.value);
            }}
            className="filter__from"
            type="number"
            placeholder="10000"
          ></input>
        </div>
        <div className="filter__by">
          <p className="filter__title">Производитель</p>
          <div className="filter-search__search">
            <input
              onChange={(e) => {
                onChangeSelected(e.target.value);
              }}
              className="filter-search__input"
              placeholder="Поиск..."
            ></input>
            <button className="filter-search__search-btn"></button>
            <div className="filter-search__search-icon"></div>
          </div>
          <ul className="checkbox">
            {massiveOfBrands.map((obj, id) => {
              return (
                <li className="checkbox__item" key={id}>
                  <label className="checkbox__lable">
                    <input
                      className="checkbox__real"
                      type="checkbox"
                      onClick={() => onClickBrandSelected(obj.brand)}
                    />
                    <span className="checkbox__fake"></span>
                    {obj.brand}
                    <span>{obj.count}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="filter__category">
          <p className="filter__title">Категории</p>
          <ul className="filter__category-list">
            {category.map((obj, id) => {
              return (
                <li
                  className={
                    obj.categoryProperty === categoryProperty
                      ? 'filter__category-item active'
                      : 'filter__category-item'
                  }
                  key={id}
                >
                  <button onClick={() => onClickSelected(obj.categoryProperty)}>
                    {obj.first} {obj.second}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Filter };
