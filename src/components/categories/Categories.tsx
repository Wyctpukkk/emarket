import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSort } from '../../store/reducers/sortSlice';

const Categories = () => {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const list = [
    { name: 'Цене↑', sortProperty: 'priceUp' },
    { name: 'Цене↓', sortProperty: 'priceDown' },
    { name: 'Названию↑', sortProperty: 'titleUp' },
    { name: 'Названию↓', sortProperty: 'titleDown' },
  ];
  const dispatch = useAppDispatch();

  const defaulSort: string = useAppSelector(
    (state) => state.sortReducer.sort.name
  );

  const onClickSelected = (id: number) => {
    setShowSortMenu(false);
    dispatch(setSort(list[id]));
  };

  return (
    <div className="wrapper">
      <ul className="navigation">
        <li className="navigation__item">Главная</li>
        <li className="navigation__item">Косметика</li>
      </ul>
      <div className="sort">
        <p className="sort__title">Косметика и гигиена</p>
        <div className="sort__select">
          Сортировка по:
          <button
            className="sort__select_active"
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            {defaulSort}
          </button>
          {showSortMenu && (
            <div className="popup">
              <ul className="popup__list">
                {list.map((value, id) => {
                  return (
                    <li className="popup__item" key={id}>
                      <button
                        onClick={() => {
                          onClickSelected(id);
                        }}
                      >
                        {value.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <ul className="category">
        <li className="category__item">
          <button>
            <pre>
              Уход <br /> за телом
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Уход <br /> за руками
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Уход <br /> за ногами
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Уход <br /> за лицом
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Уход <br /> за волосами
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Средства <br /> для загара
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Средства <br /> для бритья
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>Подарочные наборы</button>
        </li>
        <li className="category__item">
          <button>Гигиеническая продукция</button>
        </li>
        <li className="category__item">
          <button>
            <pre>
              Гигиена <br /> полости рта
            </pre>
          </button>
        </li>
        <li className="category__item">
          <button>Бумажная продукция</button>
        </li>
      </ul>
    </div>
  );
};

export { Categories };
