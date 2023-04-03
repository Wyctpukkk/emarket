const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <ul className="columns">
          <li className="columns__item">
            <ul className="about">
              <li className="about__logo">LOGO</li>
              <li className="about__desc">
                Компания «Султан» — снабжаем <br />
                розничные магазины товарами <br />
                "под ключ" в Кокчетаве и Акмолинской <br />
                области
              </li>
              <li className="about__desc_next">Подпишись на скидки и акции</li>
              <li className="about__input">
                <input
                  className="about__input_field"
                  placeholder="Введите ваш Е-mail"
                ></input>
                <button className="about__input_btn"></button>
                <div className="about__input_icon"></div>
              </li>
            </ul>
          </li>
          <li className="columns__item">
            <ul className="menu">
              <li className="menu__title">Меню сайта:</li>
              <li className="menu__link">О компании</li>
              <li className="menu__link">Доставка и оплата</li>
              <li className="menu__link">Возврат</li>
              <li className="menu__link">Контакты</li>
            </ul>
          </li>
          <li className="columns__item">
            <ul className="categories">
              <li className="categories__title"> Категории:</li>
              <li className="categories__link">Бытовая химия</li>
              <li className="categories__link">Косметика и гигиена</li>
              <li className="categories__link">Товары для дома</li>
              <li className="categories__link">Товары для детей и мам</li>
              <li className="categories__link">Посуда</li>
            </ul>
          </li>
          <li className="columns__item">
            <ul className="price-list">
              <li className="price-list__title"> Скачать прайс-лист:</li>
              <li className="price-list__button-wrapper">
                <button className="price-list__button">Прайс-лист</button>
                <span className="price-list__button_icon"></span>
              </li>
              <li className="price-list__desc">Связь в мессенджарах</li>
              <li className="price-list__messangers">
                <button className="price-list__messangers_wu"></button>
                <button className="price-list__messangers_tg"></button>
              </li>
            </ul>
          </li>
          <li className="columns__item">
            <ul className="contacts">
              <li className="contacts__title">Контакты:</li>
              <li className="contacts__item">
                <span>+7 (777) 490-00-91</span>
                <br />
                <span>время работы: 9:00-20:00</span>
                <br />
                <span>Заказать звонок</span>
              </li>
              <li className="contacts__item">
                <span> opt.sultan@mail.ru</span>
                <br />
                <span>На связи в любое время</span>
              </li>
              <li className="contacts__payload">
                <span className="contacts__payload_visa"></span>
                <span className="contacts__payload_master"></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
