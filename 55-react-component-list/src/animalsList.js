import React from "react";

const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];

const List = () => {
  return (
    <ul className='animals_list'>
      {animals.map((animal) => {
       return <li>{animal}</li>;
      })}
    </ul>
  );
};

export default List;
