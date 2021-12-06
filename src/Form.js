import React, { useState } from "react";
import APIFetch from './APIFetch'

export function Form(props) {
    const [vin, setVin] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="vincode"
          value={vin}
          onChange={e => setVin(e.target.value)}
        />
      <input type="submit" value="Проверить" />
    </form>
  );
}

export default Form;
