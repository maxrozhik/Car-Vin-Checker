import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";



function APIFetch() {
  const [data, setData] = useState([]);
  const [vin, setVin] = useState("")


  const sclick = useCallback(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`,
      );
      const json = await res.json();
      setData(json.Results);
    };
    fetchData();
  }, [vin]);


  return (
    <>
      <Link to="/variables">variables</Link>
      <br></br>
      <input
        type="text"
        placeholder="vincode"
        onChange={e => setVin(e.target.value)}
      />
      <input type="submit" value="Проверить" onClick={sclick} />
      {
        data.map((item, index) => (
          item.Value ? <ul key={item.VariableId}>
            {item.Variable}: {item.Value}
          </ul> : null
        ))
      }
    </>
  );
}

export default APIFetch;
