import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  setCategory,
  setSearch,
  setMinPrice,
  setMaxPrice,
  setBrand,
} from '../../store/reducers/sortSlice';
import { useEffect, useState } from 'react';
import { Product } from '../../models/IProduct';

interface StateProperties {
  brand: string;
  count: number;
}

const Filter: React.FC = () => {
  const { categoryArray } = useAppSelector((state) => state.dataReducer);

  const db: Product[] = useAppSelector((state) => state.dataReducer.database);
  useEffect(() => {
    setData(db);
  }, [db]);
  const [data, setData] = useState<Product[]>([]);

  const [arrayOfBrands, setArrayOfBrands] = useState<StateProperties[]>([]);

  const dispatch = useAppDispatch();

  const { category, brand } = useAppSelector((state) => state.sortReducer);

  const onClickSelected = (id: number) => {
    id === category ? dispatch(setCategory(0)) : dispatch(setCategory(id));
  };

  const onChangeSelected = (value: string) => {
    value === '' ? dispatch(setSearch('')) : dispatch(setSearch(value));
  };

  const onChangeMinPriceSelected = (min: number | string) => {
    dispatch(setMinPrice(+min));
  };

  const onChangeMaxPriceSelected = (max: number | string) => {
    max === '' ? dispatch(setMaxPrice(10000)) : dispatch(setMaxPrice(+max));
  };

  const onClickBrandSelected = (value: string) => {
    let array = [...brand];
    if (brand.includes(value)) {
      array = [...array.filter((obj) => obj !== value)];
    } else {
      array.push(value);
    }
    dispatch(setBrand(array));
  };

  useEffect(() => {
    const allBrandsWithRepeat: string[] = data
      .map((obj: Product) => {
        return obj.brand;
      })
      .sort();

    const unicalBrands: string[] = Array.from(new Set(allBrandsWithRepeat));

    const countOfBrand: number[] = [];

    for (let i = 0; i < unicalBrands.length; i++) {
      const lengthOfBrand: number = allBrandsWithRepeat.filter((obj) => {
        return obj === unicalBrands[i];
      }).length;
      countOfBrand.push(lengthOfBrand);
    }

    const brandFilter: StateProperties[] = [];

    const createObj = (key: string, value: number) => {
      brandFilter.push({ brand: key, count: value });
    };

    for (let i = 0; i < unicalBrands.length; i++) {
      createObj(unicalBrands[i], countOfBrand[i]);
    }

    setArrayOfBrands(brandFilter);
  }, [data]);

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
            {arrayOfBrands.map((obj, id) => {
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
            {categoryArray.map((obj, id) => {
              return (
                <li
                  className={
                    obj.categoryProperty === category
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
