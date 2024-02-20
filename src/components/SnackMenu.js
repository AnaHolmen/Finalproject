import React from "react";

function SnackMenu() {
  // Define snack data
  const snacks = [
    { Class: "Hotdog", price: "$5.00" },
    { Class: "Popcorn", price: "$4.00" },
    { Class: "Candy", price: "$3.00" },
    { Class: "Soda", price: "$2.50" },
  ];

  const snackImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstdq8JU1cjiQhZ6JItEDikYk_Xj2sp0Dp5g&usqp=CAU";

  return (
    <div className="container" style={{ width: "2000px" }}>
      {/* Flex container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Snack image */}
        <img
          src={snackImageUrl}
          alt="Snack"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />

        {/* Table for displaying snack menu */}
        <table className="table" style={{ marginTop: "20px", width: "100%" }}>
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
                className={
                  index % 2 === 0 ? "table-primary" : "table-secondary"
                }
              >
                <th scope="row">{snack.Class}</th>
                <td>{snack.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SnackMenu;
