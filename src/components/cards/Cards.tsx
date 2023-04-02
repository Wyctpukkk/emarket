import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Product } from '../../models/IProduct';
import { Link } from 'react-router-dom';
import { addCatalogProduct } from '../../store/reducers/cartSlice';
import { Pagination } from '../pagination/Pagination';
import db from '../../db.json';

interface sortState {
  brand: string[];
  minPrice: number;
  maxPrice: number;
  search: string;
  category: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const Cards = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const [items, setItems] = useState<any>(data);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);
  const lastItemIndex: number = currentPage * itemsPerPage;
  const firtItemIndex: number = lastItemIndex - itemsPerPage;
  const currentItem: Product[] = items.slice(firtItemIndex, lastItemIndex);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const state: sortState = useAppSelector((state) => state.sortReducer);
  const { category, search, minPrice, maxPrice, brand } = state;

  const sortProperty: string = useAppSelector(
    (state) => state.sortReducer.sort.sortProperty
  );

  const onClickAddCatalogProduct = (obj: Product) => {
    dispatch(addCatalogProduct(obj));
  };

  useEffect(() => {
    if (localStorage.length === 0 || localStorage.database === '[]') {
      setData(db);
    } else {
      setData(JSON.parse(localStorage.getItem('database')!));
    }
  }, []);

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {
    if (category === 0) {
      setItems(data);
    } else {
      setItems([
        ...data.filter((obj: Product) => {
          return obj.category.includes(category);
        }),
      ]);
    }
  }, [category]);

  useEffect(() => {
    if (search === '') {
      setItems(data);
    } else {
      setItems([
        ...data.filter((obj: Product) => {
          return obj.productedBy.toLowerCase().includes(search.toLowerCase());
        }),
      ]);
    }
  }, [search]);

  useEffect(() => {
    setItems([
      ...data.filter((obj: Product) => {
        return obj.price > minPrice && obj.price < maxPrice;
      }),
    ]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (brand.length === 0) {
      setItems(data);
    } else {
      setItems([
        ...data.filter((obj: Product) => {
          return brand.includes(obj.brand);
        }),
      ]);
    }
  }, [brand]);

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
          {currentItem.map((obj, index) => {
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
                <Link to={`item/${obj.uid}`} className="card__desc">
                  <span className="card__title">{obj.name}</span> {obj.desc}
                </Link>
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
                  <button
                    onClick={() => {
                      onClickAddCatalogProduct(obj);
                    }}
                    className="card__add"
                  >
                    В КОРЗИНУ
                  </button>
                  <span className="card__add_icon"></span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="pagination-block">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      </div>
      <p className="decription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
        ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate
        feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
        pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
        dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </div>
  );
};

export { Cards };
