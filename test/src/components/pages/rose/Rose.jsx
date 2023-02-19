import React, { useState } from "react";

import data from "./Mock/Main";
const Rose = () => {
  const [items, setItem] = useState(data);

  const FilterJs = (category) => {
    const update = data.filter((index) => index.category === category);
    console.log(update);
    setItem(update);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          margin: "30px 0px",
        }}
      >
        <button
          style={{ padding: "10px 20px", borderRadius: 10, border: "none" }}
          onClick={() => setItem(data)}
        >
          ALL
        </button>
        <button
          style={{ padding: "10px 20px", borderRadius: 10, border: "none" }}
          onClick={() => FilterJs("fruit")}
        >
          Fruit
        </button>

        <button
          style={{ padding: "10px 20px", borderRadius: 10, border: "none" }}
          onClick={() => FilterJs("car")}
        >
          Car
        </button>
        <button
          style={{ padding: "10px 20px", borderRadius: 10, border: "none" }}
          onClick={() => FilterJs("alchool")}
        >
          Drink
        </button>
        <button
          style={{ padding: "10px 20px", borderRadius: 10, border: "none" }}
          onClick={() => FilterJs("flower")}
        >
          Flower
        </button>
      </div>

      <div className="container">
        <div className="row">
          {items.map((el, id) => (
            <div className="col-lg-3" key={id}>
              <img
                src={el.images}
                style={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
              <h5>{el.name}</h5>
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Rose;