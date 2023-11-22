import React, { useState } from "react";
import useFetch from "./UseFetch";

function Custom() {
  const [results] = useFetch(`https://rickandmortyapi.com/api/character/`);

  return (
    <div>
      <h3>Custom Hook</h3>
      {results && results?.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  );
}

export default Custom;
