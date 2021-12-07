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
    console.log(Response);
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data["Description"] }}></div>
      <div className="headerLink">
        <Link to="/" className="linkMain">
          {" "}
          ←Back to Vin Code Checker
        </Link>
      </div>
      <div className="testStyle">
        {data.map((item, index) => (
          <ul key={item.ID}>
            {item.Name}: <br /> {item.Description}
          </ul>
        ))}
      </div>
    </>
  );
}

export default ValuesList;
