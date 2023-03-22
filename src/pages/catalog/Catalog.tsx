import { Adress } from '../../components/adress/Adress';
import { Cards } from '../../components/cards/Cards';
import { Categories } from '../../components/categories/Categories';
import { Filter } from '../../components/filter/Filter';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Sort } from '../../components/sort/Sort';

const Catalog = () => {
  return (
    <div>
      <Header />
      <Adress />
      <Sort />
      <Categories />
      <aside className="container">
        <Filter />
        <Cards />
      </aside>
      <Footer />
    </div>
  );
};

export { Catalog };
