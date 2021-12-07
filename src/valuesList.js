import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function ValuesList() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`,
      );
      const json = await res.json();
      setData(json.Results);
    };
    fetchData();
  }, []);


  return (
    <>
      <Link to="/">Fuck go back</Link>
      {
        data.map((item, index) => (
         <ul key={item.ID}>
            {item.Name}: <br /> {item.Description}
          </ul> 
        ))
      }
    </>
  );
}

export default ValuesList;