import arrowSvg from '../../assets/pagination.svg';

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
  currentPage: number;
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <button
        className="pagination__prev"
        onClick={() => {
          return currentPage > 1
            ? paginate(currentPage - 1)
            : paginate(pageNumbers[pageNumbers.length - 1]);
        }}
      >
        <img src={arrowSvg} alt="prev" />
      </button>
      <ul className="pagination__list">
        {pageNumbers.map((obj, id) => {
          return (
            <li className="pagination__item" key={id}>
              <button
                className={
                  currentPage === obj
                    ? 'pagination__page active'
                    : 'pagination__page'
                }
                onClick={() => paginate(obj)}
              >
                {obj}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="pagination__next"
        onClick={() => {
          return currentPage < pageNumbers.length
            ? paginate(currentPage + 1)
            : paginate(pageNumbers[0]);
        }}
      >
        <img src={arrowSvg} alt="next" />
      </button>
    </div>
  );
};

export { Pagination };
