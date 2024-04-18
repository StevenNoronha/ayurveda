import React, { useState } from "react";

function PredictAns({ predictionResponse }) {
  // Define state variable to manage dosha mapping
  const [dosha, setDosha] = useState("");

  // Map dosha based on predictionResponse
  const mapDosha = () => {
    switch (predictionResponse["predicted_label"]) {
      case "0":
        setDosha("Vata");
        localStorage.setItem("dosha", "Vata");
        break;
      case "1":
        setDosha("Kapha");
        localStorage.setItem("dosha", "Kapha");
        break;
      case "2":
        setDosha("Pitta");
        localStorage.setItem("dosha", "Pitta");
        break;
      default:
        setDosha("");
        localStorage.setItem("dosha", "");
        break;
    }
  };

  // Call mapDosha when predictionResponse changes
  React.useEffect(() => {
    mapDosha();
  }, [predictionResponse]);

  return (
    <div className="background container">
      <div className='questions container'>
        <h1>Your predicted dosha is </h1>
        <h1 style={{ color: "red" }}>{dosha}</h1>
      </div>
    </div>
  );
}

export default PredictAns;
