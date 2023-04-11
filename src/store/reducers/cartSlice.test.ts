import {
  addCatalogProduct,
  addCartProduct,
  removeProduct,
  removeOneProduct,
  clearCart,
} from './cartSlice';
import cartSlice from './cartSlice';

describe('cartSlice', () => {
  test('проверка на дефолтный стейт при пустом событии', () => {
    const result = cartSlice(undefined, { type: '' });
    expect(result).toEqual({ arrayOfItems: [], totalItems: 0, totalPrice: 0 });
  });

  test('добавление нового продукта через каталог', () => {
    const action = {
      type: addCatalogProduct.type,
      payload: {
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
    };
    const result = cartSlice(
      { arrayOfItems: [], totalItems: 0, totalPrice: 0 },
      action
    );
    expect(result.totalItems).toBe(1);
    expect(result.arrayOfItems).toEqual([
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
    expect(result.totalPrice).toBe(281);
  });

  test('добавление нового продукта через корзину', () => {
    const action = {
      type: addCartProduct.type,
      payload: {
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
    };
    const result = cartSlice(
      {
        arrayOfItems: [
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
        totalItems: 1,
        totalPrice: 281,
      },
      action
    );
    expect(result.totalItems).toBe(2);
    expect(result.arrayOfItems).toEqual([
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
        price: 562,
        count: 2,
      },
    ]);
    expect(result.totalPrice).toBe(562);
  });

  test('Удаление всей позиции продукта в не зависимости от количества ', () => {
    const action = {
      type: removeProduct.type,
      payload: {
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
    };
    const result = cartSlice(
      {
        arrayOfItems: [
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
        totalItems: 1,
        totalPrice: 281,
      },
      action
    );
    expect(result.totalItems).toBe(0);
    expect(result.arrayOfItems).toEqual([]);
    expect(result.totalPrice).toBe(0);
  });

  test('удаление одного продукта из N штук', () => {
    const action = {
      type: removeOneProduct.type,
      payload: {
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
    };
    const result = cartSlice(
      {
        arrayOfItems: [
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
            price: 562,
            count: 2,
          },
        ],
        totalItems: 2,
        totalPrice: 562,
      },
      action
    );
    expect(result.totalItems).toEqual(1);
    expect(result.arrayOfItems).toEqual([
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
    expect(result.totalPrice).toBe(281);
  });

  test('Очистка корзины', () => {
    const action = {
      type: clearCart.type,
    };
    const result = cartSlice(
      {
        arrayOfItems: [
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
            price: 562,
            count: 2,
          },
        ],
        totalItems: 2,
        totalPrice: 562,
      },
      action
    );
    expect(result.totalItems).toEqual(0);
    expect(result.arrayOfItems).toEqual([]);
    expect(result.totalPrice).toBe(0);
  });
});
