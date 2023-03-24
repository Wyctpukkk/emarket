import { Provider } from 'react-redux';
import { Catalog } from './pages/catalog/Catalog';
import { Cart } from './pages/cart/Cart';
import { Item } from './pages/item/Item';
import { setupStore } from './store/store';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../src/components/footer/Footer';
import { Header } from '../src/components/header/Header';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:uid" element={<Item />} />
        <Route path="*" element={<Catalog />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
