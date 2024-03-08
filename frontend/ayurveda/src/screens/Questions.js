import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function Questions() {
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); // Track current question index
  const [predicted, setPredicted] = useState(true);
  const [predictionResponse, setPredictionResponse] = useState({});
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const loadData = async () => {
    let response = await fetch(global.url + "api/foodData", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    setData(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  function handleOptionChange(event, questionIndex) {
    const selectedOption = event.target.value;
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [`${questionIndex}`]: selectedOption,
    }));
    setIsOptionSelected(true);
  }

  const handleNextQuestion = () => {
    if (!isOptionSelected) {
      alert("Please select an option before proceeding.");
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);

    if (currentIndex === data.length - 1) {
      handleSubmit();
    }

    setIsOptionSelected(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading state to true when submitting

    try {
      const response = await fetch(global.url + "api/submitData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          qna_data: selectedAnswers,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction response");
      }

      const predictionResponse = await response.json();
      setPredictionResponse(predictionResponse);
      console.log("Prediction Response:", predictionResponse); // Check the response data
      setPredicted(false);
      console.log("Selected Answers:", selectedAnswers);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state to false when response is received
    }
  };

  return (
    <>
      <Navbar />
      {isLoading ? ( // Display loading animation when isLoading is true
        <Loading/>
      ) : predicted ? (
        <div className="background container">
          <form
            className="container questions"
            onSubmit={(e) => {
              e.preventDefault();
              handleNextQuestion();
            }}
            key={currentIndex}
          >
            <legend>Question {currentIndex + 1}</legend> {/* Display current question number */}
            {Array.isArray(data) && data[currentIndex] ? (
              <div className="qcard">
                <div>
                  <b>{data[currentIndex].question}</b>
                </div>
                <div className="container qOpts">
                  {data[currentIndex].options.map((optionObj, optionIndex) => {
                    const key = Object.keys(optionObj)[0];
                    const option = optionObj[key];
                    return (
                      <label key={optionIndex}>
                        <input
                          type="radio"
                          name={`question_${data[currentIndex].question_no}`}
                          value={key}
                          onChange={(e) =>
                            handleOptionChange(e, data[currentIndex].question_no)
                          }
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>No questions found</div>
            )}
            <button type="submit">
              {currentIndex === data.length - 1 ? "Submit" : "Next"}
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <div className="doshaAns container">
            <h1>Your predicted dosha is </h1>
            <h1 style={{ color: "red" }}>
              {predictionResponse["predicted_label"] === "0"
                ? " Vata"
                : predictionResponse["predicted_label"] === "1"
                ? " Kapha"
                : predictionResponse["predicted_label"] === "2"
                ? " Pitta"
                : ""}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
