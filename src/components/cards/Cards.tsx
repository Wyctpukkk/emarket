import db from '../../db.json';
const Cards = () => {
  console.log(db);
  return (
    <div className="cards">
      <ul className="cards__list">
        {db.map((obj, id) => {
          return (
            <li className="card">
              <div className="card__image-wrapper">
                <img className="card__image" src={obj.url} alt="product" />
                <div className="card__type">
                  <div
                    className={`card__type_${obj.type === 'л' ? 'litr' : 'kg'}`}
                  ></div>
                  {obj.typeValue} {obj.type}
                </div>
              </div>
              <p className="card__desc">
                <span className="card__title">{obj.name}</span> {obj.desc}
              </p>
              <ul className="card__details">
                <li className="card__details_item">
                  Штрихкод:<span>{obj.uid}</span>
                </li>
                <li className="card__details_item">
                  Производитель:<span>{obj.productedBy}</span>
                </li>
                <li className="card__details_item">
                  Бренд:<span>{obj.brand}</span>
                </li>
                <li className="card__details_item">
                  Тип ухода:<span>{obj.category}</span>
                </li>
              </ul>
              <div className="card__payload">
                <span className="card__cost">{obj.price} ₸</span>
                <button className="card__add">В КОРЗИНУ</button>
                <span className="card__add_icon"></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Cards };
