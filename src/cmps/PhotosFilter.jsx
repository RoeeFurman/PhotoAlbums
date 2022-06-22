import React, { useState } from "react";

export const PhotosFilter = ({ setFilter }) => {
  const [Value, setValue] = useState("");
  const onFilterChanged = (value) => {
    setValue(value);
    setFilter(value);
  };

  return (
    <section>
      <section className="photo-filter">
        <h1>Search Photo: </h1>
        <input
          onChange={(e) => onFilterChanged(e.target.value)}
          type="text"
          name="text"
          value={Value}
          placeholder="looking for..."
        />
      </section>
    </section>
  );
};
