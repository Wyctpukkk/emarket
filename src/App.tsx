import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Catalog } from './pages/catalog/Catalog';
import { Cart } from './pages/cart/Cart';
import { Item } from './pages/item/Item';
import { Footer } from '../src/components/footer/Footer';

const App = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:uid" element={<Item />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
