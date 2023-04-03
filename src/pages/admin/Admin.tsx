import { useState, useEffect } from 'react';
import { Product } from '../../models/IProduct';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setData } from '../../store/reducers/dataSlice';

const Admin: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryArray, database } = useAppSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    setNewData(database);
  }, [database]);

  const [data, setNewData] = useState<Product[]>([]);

  const [url, setUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [typeValue, setTypeValue] = useState<number>(0);
  const [uid, setUid] = useState<number>(0);
  const [category, setCategory] = useState<number[]>([]);
  const [productedBy, setProductedBy] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const deleteItem = (uid: number) => {
    dispatch(
      setData(
        [...data].filter((obj: Product) => {
          return obj.uid !== uid;
        })
      )
    );
  };

  const addItem = (
    url: string,
    name: string,
    type: string,
    typeValue: number,
    uid: number,
    category: number[],
    productedBy: string,
    brand: string,
    desc: string,
    price: number
  ) => {
    const array = [...data.filter((obj: Product) => obj.uid !== uid)];
    const item = {
      url,
      name,
      type,
      typeValue,
      uid,
      category,
      productedBy,
      brand,
      desc,
      price,
      count: 1,
    };
    dispatch(setData([...array, item]));
    clearInputs();
  };

  const clearInputs = () => {
    setUrl('');
    setName('');
    setType('');
    setTypeValue(0);
    setUid(0);
    setProductedBy('');
    setBrand('');
    setDesc('');
    setPrice(0);
    setCategory([]);
  };

  useEffect(() => {
    localStorage.setItem('database', JSON.stringify(data));
  }, [data]);

  const editItem = (obj: Product) => {
    setUrl(obj.url);
    setName(obj.name);
    setType(obj.type);
    setTypeValue(obj.typeValue);
    setUid(obj.uid);
    setProductedBy(obj.productedBy);
    setBrand(obj.brand);
    setDesc(obj.desc);
    setPrice(obj.price);
    setCategory(obj.category);
  };

  const addTypes = (value: number) => {
    const array: number[] = [...category];
    array.includes(value)
      ? setCategory([...array.filter((obj: number) => obj !== value)])
      : setCategory([...array, value]);
  };

  return (
    <div className="admin-panel">
      {data && (
        <ul className="cards__list">
          {data.map((obj: Product) => {
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
                  <button
                    onClick={() => {
                      deleteItem(obj.uid);
                    }}
                    className="card__action"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      editItem(obj);
                    }}
                    className="card__action"
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <div className="admin-panel__actions">
        <label className="admin-panel__label">
          Url:
          <input
            className="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Name:
          <input
            className="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Type:
          <input
            className="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          TypeValue:
          <input
            className="typeValue"
            value={typeValue}
            onChange={(e) => setTypeValue(+e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Uid:
          <input
            className="uid"
            value={uid}
            onChange={(e) => setUid(+e.target.value)}
          />
        </label>
        <label className="category-label">
          Category:
          {categoryArray.map((obj, id) => {
            return (
              <label className="category-label__checkbox" key={id}>
                {obj.first} {obj.second}
                <input
                  checked={
                    category.includes(obj.categoryProperty) ? true : false
                  }
                  type="checkbox"
                  value={obj.categoryProperty}
                  onChange={(e) => {
                    addTypes(+e.target.value);
                  }}
                />
              </label>
            );
          })}
        </label>
        <label className="admin-panel__label">
          ProductedBy:
          <input
            className="productedBy"
            value={productedBy}
            onChange={(e) => setProductedBy(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Brand:
          <input
            className="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Description:
          <input
            className="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <label className="admin-panel__label">
          Price:
          <input
            className="price"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </label>

        <button
          className="card__action"
          onClick={() =>
            addItem(
              url,
              name,
              type,
              typeValue,
              uid,
              category,
              productedBy,
              brand,
              desc,
              price
            )
          }
        >
          Добавить/редактировать
        </button>
        <button className="card__action" onClick={() => clearInputs()}>
          Очистить поля
        </button>
        <Link to={'/'} className="card__action" onClick={() => clearInputs()}>
          На главную
        </Link>
      </div>
    </div>
  );
};

export { Admin };
