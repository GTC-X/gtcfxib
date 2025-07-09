import React from "react";

const EmbeddedGoogleSheet = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vStzsdJGbldjnTHSaimssqyCRcCuE_rBqBnfUG0msAUyHzm75oyphHMEm4a-VLx8WF3kT5u_zNnjXx3/pubhtml?widget=true&amp;headers=false"
        style={{
          width: "100%",
          height: "1050px",
          border: "none",
        }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedGoogleSheet;
