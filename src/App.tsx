import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Catalog } from './pages/catalog/Catalog';
import { Cart } from './pages/cart/Cart';
import { Item } from './pages/item/Item';
import { Admin } from './pages/admin/Admin';

const App = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/item/:uid" element={<Item />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;
