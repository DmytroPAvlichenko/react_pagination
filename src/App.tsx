import React, { useState } from 'react';
import './App.css';
import { Item } from './components/Item/Item';
import { Pagination } from './components/Pagination';
import { getNumbers } from './utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map(n => `Item ${n}`);

export const App: React.FC = () => {
  const [coutlist, setCountlist] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState(1);

  const start = 1 + (currentPage - 1) * coutlist;
  const end = Math.min(coutlist * currentPage, items.length);

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page {currentPage} {`(items ${start} - ${end} of 42)`}
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            defaultValue={5}
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            onChange={event => {
              setCountlist(+event.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>
      <Pagination
        total={items.length}
        perPage={coutlist}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Item start={start} end={end} items={coutlist} />
    </div>
  );
};

export default App;
