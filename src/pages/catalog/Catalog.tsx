import { Cards } from '../../components/cards/Cards';
import { Categories } from '../../components/categories/Categories';
import { Filter } from '../../components/filter/Filter';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

const Catalog = () => {
  return (
    <div>
      <Header />
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
