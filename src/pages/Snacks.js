import React from "react";
import SnackMenu from "../components/SnackMenu";

function SnackPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Snack Page</h1>
      {/* Component to display the snack menu */}
      <SnackMenu />
    </div>
  );
}

export default SnackPage;
