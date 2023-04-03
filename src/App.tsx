import { useEffect } from 'react';

import { useAppDispatch } from './hooks/redux';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Catalog } from './pages/catalog/Catalog';
import { Cart } from './pages/cart/Cart';
import { Item } from './pages/item/Item';
import { Admin } from './pages/admin/Admin';
import { setData } from './store/reducers/dataSlice';
import db from './db.json';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.length === 0 || localStorage.database === '[]') {
      dispatch(setData(db));
    } else {
      dispatch(setData(JSON.parse(localStorage.getItem('database')!)));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/item/:uid" element={<Item />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default App;
