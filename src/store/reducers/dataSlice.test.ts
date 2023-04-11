import { setData } from './dataSlice';
import dataSlice from './dataSlice';

describe('dataSlice', () => {
  test('проверка на дефолтный стейт при пустом событии', () => {
    const result = dataSlice(undefined, { type: '' });
    expect(result).toEqual({
      database: [],
      categoryArray: [
        { first: 'Уход', second: 'за телом', categoryProperty: 1 },
        { first: 'Уход', second: 'за руками', categoryProperty: 2 },
        { first: 'Уход', second: 'за ногами', categoryProperty: 3 },
        { first: 'Уход', second: 'за лицом', categoryProperty: 4 },
        { first: 'Уход', second: 'за волосами', categoryProperty: 5 },
        { first: 'Средства', second: 'для загара', categoryProperty: 6 },
        { first: 'Средства', second: 'для бритья', categoryProperty: 7 },
        { first: 'Подарочные', second: 'наборы', categoryProperty: 8 },
        { first: 'Гигиеническая', second: 'продукция', categoryProperty: 9 },
        { first: 'Гигиена', second: 'полости рта', categoryProperty: 10 },
        { first: 'Бумажная', second: 'продукция', categoryProperty: 11 },
      ],
    });
  });

  test('добавление продуктов в базу данных', () => {
    const action = {
      type: setData.type,
      payload: [
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
      ],
    };
    const result = dataSlice(
      {
        database: [],
        categoryArray: [
          { first: 'Уход', second: 'за телом', categoryProperty: 1 },
          { first: 'Уход', second: 'за руками', categoryProperty: 2 },
          { first: 'Уход', second: 'за ногами', categoryProperty: 3 },
          { first: 'Уход', second: 'за лицом', categoryProperty: 4 },
          { first: 'Уход', second: 'за волосами', categoryProperty: 5 },
          { first: 'Средства', second: 'для загара', categoryProperty: 6 },
          { first: 'Средства', second: 'для бритья', categoryProperty: 7 },
          { first: 'Подарочные', second: 'наборы', categoryProperty: 8 },
          { first: 'Гигиеническая', second: 'продукция', categoryProperty: 9 },
          { first: 'Гигиена', second: 'полости рта', categoryProperty: 10 },
          { first: 'Бумажная', second: 'продукция', categoryProperty: 11 },
        ],
      },
      action
    );
    expect(result.database).toEqual([
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
  });
});
