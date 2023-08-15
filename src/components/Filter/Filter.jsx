import React, { useContext } from 'react';
import { Context } from 'context/contactContext';

const Filter = () => {
  const { contacts, filter, setFilter } = useContext(Context);

  return (
    <label>
      Find contacts by name:
      <br />
      <input
        type="text"
        value={filter}
        onChange={e => {
          setFilter(e.currentTarget.value);
        }}
      />
    </label>
  );
};

export default Filter;
