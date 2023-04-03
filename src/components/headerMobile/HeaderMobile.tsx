import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import searchSvg from '../../assets/search2.svg';
import catalogSvg from '../../assets/square2.svg';

const HeaderMobile: React.FC = () => {
  const { totalItems } = useAppSelector((state) => state.cartReducer);

  return (
    <header className="mob-header">
      <article className="mob-upheader">
        <button className="mob-upheader__burger">
          Menu
          <span className="mob-upheader__burger_span"></span>
          <span className="mob-upheader__burger_span"></span>
          <span className="mob-upheader__burger_span"></span>
        </button>
        <Link to={'/'} className="mob-downheader__logotype"></Link>
        <Link to={'cart'} className="mob-downheader__cart-link">
          <span className="mob-downheader__cart-link_img"></span>
          <span className="mob-downheader__cart-link_count">{totalItems}</span>
        </Link>
      </article>
      <span className="mob-line"></span>
      <article className="mob-downheader">
        <div className="mob-downheader__catalog">
          <img src={catalogSvg} alt="catalog" />
          Каталог
        </div>
        <div className="mob-downheader__search">
          <img src={searchSvg} alt="search" />
          Поиск
        </div>
      </article>
      <span className="mob-line2"></span>
    </header>
  );
};

export { HeaderMobile };
