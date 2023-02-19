import React, { useState } from "react";
import { data } from "./data";
const Shop = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>HTML Table</h2>
      <input
        type="text"
        placeholder="search items..."
        className="input_search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === " "
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Shop;
