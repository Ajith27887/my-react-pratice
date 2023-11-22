import React, { useEffect, useState } from "react";

function UseEffectsHooks() {
  const [data, setData] = useState([]);
  const [Id, setId] = useState(1);
  const idHandler = () => {
    setId(Id + 1);
  };
  //* useEffect is a hook that lets you perform side effects in function components
  //*  It runs after every render of the component
  //* useEffect takes two parameters, a callback function and an array of dependencies
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${Id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [Id]);
  const { results } = data;

  return (
    <div>
      {/* {console.log(results)} */}
      <h3>UseEffect</h3>
      <button onClick={idHandler}>Changer Names</button>
      {results &&
        results?.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default UseEffectsHooks;
