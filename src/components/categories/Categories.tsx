import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCategory } from '../../store/reducers/sortSlice';

const Categories: React.FC = () => {
  const { categoryArray } = useAppSelector((state) => state.dataReducer);

  const dispatch = useAppDispatch();

  const categoryProperty: number = useAppSelector(
    (state) => state.sortReducer.category
  );

  const onClickSelected = (id: number) => {
    id === categoryProperty
      ? dispatch(setCategory(0))
      : dispatch(setCategory(id));
  };

  return (
    <div className="wrapper">
      <ul className="category">
        {categoryArray.map((obj, id) => {
          return (
            <li
              className={
                obj.categoryProperty === categoryProperty
                  ? 'category__item active'
                  : 'category__item'
              }
              key={id}
            >
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
