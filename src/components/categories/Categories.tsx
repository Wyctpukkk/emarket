import { useAppDispatch } from '../../hooks/redux';
import { setCategory } from '../../store/reducers/sortSlice';

const Categories = () => {
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

  const dispatch = useAppDispatch();

  const onClickSelected = (id: number) => {
    dispatch(setCategory(id));
  };

  return (
    <div className="wrapper">
      <ul className="category">
        {category.map((obj, id) => {
          return (
            <li className="category__item" key={id}>
              <button onClick={() => onClickSelected(obj.categoryProperty)}>
                <pre>
                  {obj.first} <br /> {obj.second}
                </pre>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Categories };
