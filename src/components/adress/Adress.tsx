import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { Product } from '../../models/IProduct';

interface objAdressProperties {
  path: string;
  name: string;
}

const Adress = () => {
  const db: Product[] = useAppSelector((state) => state.dataReducer.database);

  let { pathname } = useLocation();

  const array: objAdressProperties[] = [];

  const setAdress = (pathname: string) => {
    if (pathname === '/cart') {
      array.push({ path: '/cart', name: 'Корзина' });
    } else if (pathname === '/') {
      array.push({ path: '/', name: 'Каталог' });
    } else {
      const obj = db.filter((obj) => {
        return obj.uid === +pathname.slice(6);
      })[0];
      array.push({ path: '/', name: 'Каталог' });
      array.push({ path: pathname, name: `${obj.name} ${obj.desc}` });
    }
  };
  setAdress(pathname);

  return (
    <div className="wrapper">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={'/'}>Главная</Link>
        </li>
        {array.map((obj, id) => {
          return (
            <li key={id} className="navigation__item">
              <Link to={`${obj.path}`}>{obj.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Adress };
