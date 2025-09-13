import React from 'react';

type Props = {
  items: number;
  start: number;
  end: number;
};

export const Item: React.FC<Props> = ({ start, end }) => {
  const ite = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <ul>
      {ite.map((item, index) => (
        <li key={index} data-cy="item">
          Item {item}
        </li>
      ))}
    </ul>
  );
};
