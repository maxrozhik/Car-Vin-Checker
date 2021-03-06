import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ValuesList.scss";

function ValuesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json",
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const json = await res.json();
      setData(json.Results);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="headerLink">
        <Link to="/" className="linkMain">
          {" "}
          ←Back to Vin Code Checker
        </Link>
      </div>
      <div className="listStyle">
        {data.map((item, index) => (
          <ul key={item.ID} className="itemStyle">
            <div className="nameStyle"> {item.Name}:</div>
            <div dangerouslySetInnerHTML={{ __html: item.Description }} />
          </ul>
        ))}
      </div>
    </>
  );
}

export default ValuesList;
