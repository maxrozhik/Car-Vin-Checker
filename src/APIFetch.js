import React, { useState, useCallback } from "react";


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


//1C4BJWDGXCL192899
//JN1AZ4EH7DM430111