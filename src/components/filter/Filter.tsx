const Filter = () => {
  return (
    <div className="filter-wrapper">
      <div className="filter">
        <p className="filter__title">ПОДБОР ПО ПАРАМЕТРАМ</p>
        <div className="filter__price">
          <p className="filter__currency">
            Цена <span>₸</span>
          </p>
          <input className="filter__from" placeholder="0"></input>
          <span>-</span>
          <input className="filter__from" placeholder="10000"></input>
        </div>
        <div className="filter__by">
          <p className="filter__title">Производитель</p>
          <div className="filter-search__search">
            <input
              className="filter-search__input"
              placeholder="Поиск..."
            ></input>
            <button className="filter-search__search-btn"></button>
            <div className="filter-search__search-icon"></div>
          </div>
          <ul className="checkbox">
            <li className="checkbox__item">
              <label className="checkbox__lable">
                <input className="checkbox__real" type="checkbox" />
                <span className="checkbox__fake"></span>
                Производитель <span>(count)</span>
              </label>
            </li>
            <li className="checkbox__item">
              <label className="checkbox__lable">
                <input className="checkbox__real" type="checkbox" />
                <span className="checkbox__fake"></span>
                Производитель <span>(count)</span>
              </label>
            </li>
            <li className="checkbox__item">
              <label className="checkbox__lable">
                <input className="checkbox__real" type="checkbox" />
                <span className="checkbox__fake"></span>
                Производитель <span>(count)</span>
              </label>
            </li>
            <li className="checkbox__item">
              <label className="checkbox__lable">
                <input className="checkbox__real" type="checkbox" />
                <span className="checkbox__fake"></span>
                Производитель <span>(count)</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="filter__category">
          <p className="filter__title">Уход за телом</p>
          <ul className="filter__category-list">
            <li className="filter__category-item">Уход за телом</li>
            <li className="filter__category-item">Уход за руками</li>
            <li className="filter__category-item">Уход за ногами</li>
            <li className="filter__category-item">Уход за лицом</li>
            <li className="filter__category-item">Уход за волосами</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Filter };
