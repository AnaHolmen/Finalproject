import React from "react";

function Playing() {
  // Define the onClick handler for the buttons
  const handleButtonClick = (movieTitle, time) => {
    //  log the selected movie title and time to the console
    console.log("Selected movie:", movieTitle);
    console.log("Selected time:", time);
  };

  return (
    <div>
      <h2>Movie Showtimes</h2>

      {/* Movie: Pitch Perfect */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9276475_p_v8_ax.jpg"
          className="card-img-top"
          alt="Pitch Perfect"
        />
        <div className="card-body">
          <h5 className="card-title">Pitch Perfect</h5>
          <p className="card-text">
            {/* Add onClick handler to each button */}
            <button
              onClick={() => handleButtonClick("Pitch Perfect", "3:00 PM")}
            >
              3:00 PM
            </button>
            <button
              onClick={() => handleButtonClick("Pitch Perfect", "7:00 PM")}
            >
              7:00 PM
            </button>
            <button
              onClick={() => handleButtonClick("Pitch Perfect", "9:00 PM")}
            >
              9:00 PM
            </button>
          </p>
        </div>
      </div>

      {/* Movie: Other Women */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://m.media-amazon.com/images/I/41vHMbOACzL._AC_UF894,1000_QL80_.jpg"
          className="card-img-top"
          alt="Other Women"
        />
        <div className="card-body">
          <h5 className="card-title">Other Women</h5>
          <p className="card-text">
            {/* Add onClick handler to each button */}
            <button onClick={() => handleButtonClick("Other Women", "3:00 PM")}>
              3:00 PM
            </button>
            <button onClick={() => handleButtonClick("Other Women", "5:00 PM")}>
              5:00 PM
            </button>
            <button onClick={() => handleButtonClick("Other Women", "9:00 PM")}>
              9:00 PM
            </button>
          </p>
        </div>
      </div>

      {/* Movie: 13 Going on 30 */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://m.media-amazon.com/images/I/51SyFdBGprL.jpg"
          className="card-img-top"
          alt="13 Going on 30"
        />
        <div className="card-body">
          <h5 className="card-title">13 Going on 30</h5>
          <p className="card-text">
            {/* Add onClick handler to each button */}
            <button
              onClick={() => handleButtonClick("13 Going on 30", "2:30 PM")}
            >
              2:30 PM
            </button>
            <button
              onClick={() => handleButtonClick("13 Going on 30", "6:30 PM")}
            >
              6:30 PM
            </button>
            <button
              onClick={() => handleButtonClick("13 Going on 30", "9:00 PM")}
            >
              9:00 PM
            </button>
          </p>
        </div>
      </div>

      {/* Movie: Letters to Juliet */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7886534_p_v12_ai.jpg"
          className="card-img-top"
          alt="Letters to Juliet"
        />
        <div className="card-body">
          <h5 className="card-title">Letters to Juliet</h5>
          <p className="card-text">
            {/* Add onClick handler to each button */}
            <button
              onClick={() => handleButtonClick("Letters to Juliet", "1:00 PM")}
            >
              1:00 PM
            </button>
            <button
              onClick={() => handleButtonClick("Letters to Juliet", "4:00 PM")}
            >
              4:00 PM
            </button>
            <button
              onClick={() => handleButtonClick("Letters to Juliet", "8:00 PM")}
            >
              8:00 PM
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Playing;
