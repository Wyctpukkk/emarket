import { Adress } from '../../components/adress/Adress';
import { Cards } from '../../components/cards/Cards';
import { Categories } from '../../components/categories/Categories';
import { Filter } from '../../components/filter/Filter';
import { Sort } from '../../components/sort/Sort';

const Catalog = () => {
  return (
    <div>
      <Adress />
      <Sort />
      <Categories />
      <aside className="container">
        <Filter />
        <Cards />
      </aside>
    </div>
  );
};

export { Catalog };
