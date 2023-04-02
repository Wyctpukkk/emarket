import { useMediaQuery } from '@chakra-ui/react';
import { Adress } from '../../components/adress/Adress';
import { Cards } from '../../components/cards/Cards';
import { Categories } from '../../components/categories/Categories';
import { Filter } from '../../components/filter/Filter';
import { Sort } from '../../components/sort/Sort';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HeaderMobile } from '../../components/headerMobile/HeaderMobile';
const Catalog = () => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

  return (
    <div>
      {isLargerThan1200 ? <Header /> : <HeaderMobile />}
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
