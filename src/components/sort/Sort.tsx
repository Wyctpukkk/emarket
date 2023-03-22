import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSort } from '../../store/reducers/sortSlice';

const Sort = () => {
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
    </div>
  );
};

export { Sort };
