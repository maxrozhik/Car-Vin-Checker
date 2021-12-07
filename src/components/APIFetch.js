import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./APIFetch.scss";

function APIFetch() {
  const [data, setData] = useState([]);
  const [vin, setVin] = useState(" ");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onChange = (data) => {};

  const sclick = useCallback(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
      );
      const json = await res.json();
      setData(json.Results);
    };
    fetchData();
  }, [vin]);

  return (
    <>
      <div className="headerLink">
        <Link to="/variables" className="linkMain">
          {" "}
          All variables{" "}
        </Link>
      </div>
      <Form className="inputs" onChange={(e) => setVin(e.target.value)}>
        <Form onChange={handleSubmit(onChange)}>
          <input
            className="inputText"
            placeholder="Vin"
            type="text"
            {...register("vin", {
              required: "required",
              minLength: {
                value: 17,
              },
            })}
          />
        </Form>
        <Button className="inputButton" type="submit" onClick={sclick}>
          Submit
        </Button>
      </Form>
      {errors.vin && (
        <p className="textError">Write a code that is 17 characters long.</p>
      )}

      <div className="itemsList">
        {data.map((item, index) =>
          item.Value ? (
            <ul key={item.VariableId}>
              {item.Variable}: <br /> {item.Value}
            </ul>
          ) : null
        )}
      </div>
    </>
  );
}

export default APIFetch;
