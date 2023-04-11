import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

jest.mock('react-redux');

describe('Header', () => {
  test('Проверка соответствия количества товаров и цены в корзине + снэпшот компонента', () => {
    jest
      .spyOn(reduxHooks, 'useSelector')
      .mockReturnValue({ totalPrice: 500, totalItems: 2 });

    const view = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const totalItems = screen.getByTestId(/testAmountItems/i);
    const totalPrice = screen.getByTestId(/testAmountMoney/i);
    expect(totalItems.textContent).toEqual('2');
    expect(totalPrice.textContent).toEqual('500 ₸');
    expect(view).toMatchSnapshot();
  });

  test('Проверка роутинга в корзину и админ панель', () => {
    jest
      .spyOn(reduxHooks, 'useSelector')
      .mockReturnValue({ totalPrice: 500, totalItems: 2 });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const firstLink = screen.getByTestId(/testAdminLink/i);
    fireEvent.click(firstLink);
    expect(screen.getByTestId(/testAdminLink/i)).toBeInTheDocument();
    const secondLink = screen.getByTestId(/testCartLink/i);
    fireEvent.click(secondLink);
    expect(screen.getByTestId(/testCartLink/i)).toBeInTheDocument();
  });
});
