import { Provider } from 'react-redux';
import { Catalog } from './pages/catalog/Catalog';
import { setupStore } from './store/store';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
};

export default App;
