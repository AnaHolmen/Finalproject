import React from "react";

function SnackMenu() {
  // Define your snack data
  const snacks = [
    { class: "Hotdog", price: "$5.00" },
    { class: "Popcorn", price: "$4.00" },
    { class: "Candy", price: "$3.00" },
    { class: "Soda", price: "$2.50" },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {snacks.map((snack, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "table-primary" : "table-secondary"}
          >
            <th scope="row">{snack.class}</th>
            <td>{snack.price}</td>
          </tr>
        ))}
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Cell</td>
        </tr>
        <tr className="table-secondary">
          <th scope="row">Secondary</th>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SnackMenu;
