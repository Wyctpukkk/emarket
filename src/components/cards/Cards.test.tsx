import { render, screen } from '@testing-library/react';
import { Cards } from './Cards';
import { MemoryRouter } from 'react-router-dom';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

describe('Header', () => {
  test('Создание снапшота', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([
      {
        url: 'https://avatars.mds.yandex.net/get-mpic/4370207/img_id8174150561422744942.jpeg/orig',
        name: 'Neutrale',
        type: 'л',
        typeValue: 0.95,
        uid: 4604049097548,
        category: [9],
        productedBy: 'Neutrale',
        brand: 'Neutrale',
        desc: 'гель для стирки детского белья гипоаллергенный',
        price: 281,
        count: 1,
      },
    ]);

    const view = render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );
    const cardIsReal = screen.getByText(
      /гель для стирки детского белья гипоаллергенный/i
    );
    expect(cardIsReal).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });
});
