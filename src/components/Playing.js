import React from "react";

function Playing() {
  return (
    <div>
      <h2>Movie Showtimes</h2>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9276475_p_v8_ax.jpg"
          className="card-img-top"
          alt="Pitch Perfect"
        />
        <div className="card-body">
          <h5 className="card-title">Pitch Perfect</h5>
          <p className="card-text">
            <p className="card-text">
              <a href="#">3:00 PM</a>, <a href="#">7:00 PM</a>,{" "}
              <a href="#">9:00 PM</a>
            </p>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://m.media-amazon.com/images/I/41vHMbOACzL._AC_UF894,1000_QL80_.jpg"
          className="card-img-top"
          alt="Other Women"
        />
        <div className="card-body">
          <h5 className="card-title">Other Women</h5>
          <p className="card-text">
            <a href="#">3:00 PM</a>
            <a href="#">5:00 PM</a>, <a href="#">9:00 PM</a>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://m.media-amazon.com/images/I/51SyFdBGprL.jpg"
          className="card-img-top"
          alt="13 Going on 30"
        />
        <div className="card-body">
          <h5 className="card-title">13 Going on 30</h5>
          <p className="card-text">
            <a href="#">2:30 PM</a>, <a href="#">6:30 PM</a>,{" "}
            <a href="#">9:00 PM</a>
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7886534_p_v12_ai.jpg"
          className="card-img-top"
          alt="Letters to Juliet"
        />
        <div className="card-body">
          <h5 className="card-title">Letters to Juliet</h5>
          <p className="card-text">
            <a href="#">1:00 PM,</a> <a href="#">4:00 PM</a>,{" "}
            <a href="#">8:00 PM</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Playing;
