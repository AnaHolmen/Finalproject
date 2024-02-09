import React from "react";

function SnackMenu() {
  // Define your snack data
  const snacks = [
    { Snack: "Hotdog", price: "$5.00" },
    { Snack: "Popcorn", price: "$4.00" },
    { Snack: "Candy", price: "$3.00" },
    { Snack: "Soda", price: "$2.50" },
  ];

  const snackImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstdq8JU1cjiQhZ6JItEDikYk_Xj2sp0Dp5g&usqp=CAU";

  return (
    <div className="container" style={{ maxWidth: "1000x" }}>
      <img
        src={snackImageUrl}
        alt="Snack"
        style={{ maxWidth: "100%", maxHeight: "200px" }}
      />
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
        </tbody>
      </table>
    </div>
  );
}

export default SnackMenu;
