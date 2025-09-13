import classNa from 'classnames';
import React from 'react';

type Props = {
  total: number;
  currentPage: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / perPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1).map(n => n);

  return (
    <ul className="pagination">
      <li
        className={classNa('page-item', { disabled: currentPage === 1 })}
        onClick={
          currentPage > 1 ? () => onPageChange(currentPage - 1) : undefined
        }
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={(currentPage !== 1 ) ? "false" : "true"}
        >
          «
        </a>
      </li>
      {pages.map((count, index) => (
        <li
          key={index}
          className={classNa('page-item', {
            active: currentPage === count,
          })}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${index}`}
            onClick={() => onPageChange(index + 1)}
          >
            {count}
          </a>
        </li>
      ))}
      <li

        className={classNa('page-item', {
          disabled: currentPage >= pages.length,
        })}
        onClick={
          currentPage < pages.length
            ? () => onPageChange(currentPage + 1)
            : undefined
        }
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={(currentPage < pages.length) ? "false" : "true"}
        >
          »
        </a>
      </li>
    </ul>
  );
};
