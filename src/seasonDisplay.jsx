import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  console.log(season);

  return (
    <div
      className="container-fluid"
      id={season === "Winter" ? "winter" : "summer"}>
      <h1 className="text-center fw-bold">Seasons</h1>
      <div
        className="card mx-auto mt-5"
        style={{
          width: "18rem",
          borderRadius: "10px",
          boxShadow: "1px 0px 12px 0px rgba(50,50,50,0.3)",
        }}>
        <img
          src={
            season === "Winter"
              ? "https://www.svgrepo.com/show/34756/snowflake.svg"
              : "https://www.svgrepo.com/show/178162/sun-summer.svg"
          }
          alt=""
          className="card-img-top p-3"
        />
        <div className="card-body">
          <h3
            className="card-title text-center fw-bold"
            style={{ color: season === "Winter" ? "#008DB1" : "#C8922D" }}>
            {season}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SeasonDisplay;
