import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './valueList.scss';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
</style>



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
      <div className="headerLink">
        <Link to="/" className="linkMain"> ←Back to Vin Code Checker</Link>
      </div>
      <div className="testStyle">
        {
          data.map((item, index) => (
            <ul key={item.ID}>
              {item.Name}: <br /> {item.Description}
            </ul>
          ))
        }
      </div>
    </>
  );
}

export default ValuesList;