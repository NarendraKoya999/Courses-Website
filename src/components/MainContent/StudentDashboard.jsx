import React, { useState } from "react";
import programmingLanguagesData from "../JSONdata/programmingLanguages.json";
import frameworksData from "../JSONdata/frameworks.json";
import librariesData from "../JSONdata/libraries.json";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const StudentDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderCategoryCards = () => {
    switch (activeCategory) {
      case "Languages":
        return (
          <div style={styles.cardContainer}>
            {programmingLanguagesData.languages.map((language, index) => (
              <div key={index} style={styles.card}>
                <h3>{language.name}</h3>
                <p>{language.description}</p>
                <div style={styles.cardDetails}>
                  <p>
                    <strong>Year Created:</strong> {language.year_created}
                  </p>
                  <p>
                    <strong>Applications:</strong>{" "}
                    {language.applications.join(", ")}
                  </p>
                  <p>
                    <strong>Paradigms:</strong> {language.paradigms.join(", ")}
                  </p>
                </div>
                <a href={language.url} style={styles.learnMoreButton}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        );
      case "Frameworks":
        return (
          <div style={styles.cardContainer}>
            {frameworksData.map((framework, index) => (
              <div key={index} style={styles.card}>
                <h3>{framework.name}</h3>
                <p>{framework.description}</p>
                <div style={styles.cardDetails}>
                  <p>
                    <strong>Year Created:</strong> {framework.year_created}
                  </p>
                  <p>
                    <strong>Applications:</strong>{" "}
                    {framework.applications.join(", ")}
                  </p>
                  <p>
                    <strong>Paradigms:</strong> {framework.paradigms.join(", ")}
                  </p>
                </div>
                <a href={framework.url} style={styles.learnMoreButton}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        );
      case "Libraries":
        return (
          <div style={styles.cardContainer}>
            {librariesData.map((library, index) => (
              <div key={index} style={styles.card}>
                <h3>{library.name}</h3>
                <p>{library.description}</p>
                <div style={styles.cardDetails}>
                  <p>
                    <strong>Year Created:</strong> {library.year_created}
                  </p>
                  <p>
                    <strong>Applications:</strong>{" "}
                    {library.applications.join(", ")}
                  </p>
                  <p>
                    <strong>Paradigms:</strong> {library.paradigms.join(", ")}
                  </p>
                </div>
                <a href={library.url} style={styles.learnMoreButton}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="bg-success-subtle" style={styles.container}>
        <h1 className="text-center mt-5 mb-5">Student Dashboard</h1>
        <div className="mb-5" style={styles.categoryButtons}>
          <div
            style={{
              ...styles.categoryButton,
              backgroundColor:
                activeCategory === "Languages" ? "#007bff" : "transparent",
              color: activeCategory === "Languages" ? "#fff" : "#000",
            }}
            onClick={() => handleCategoryClick("Languages")}
          >
            Languages
          </div>
          <div
            style={{
              ...styles.categoryButton,
              backgroundColor:
                activeCategory === "Frameworks" ? "#007bff" : "transparent",
              color: activeCategory === "Frameworks" ? "#fff" : "#000",
            }}
            onClick={() => handleCategoryClick("Frameworks")}
          >
            Frameworks
          </div>
          <div
            style={{
              ...styles.categoryButton,
              backgroundColor:
                activeCategory === "Libraries" ? "#007bff" : "transparent",
              color: activeCategory === "Libraries" ? "#fff" : "#000",
            }}
            onClick={() => handleCategoryClick("Libraries")}
          >
            Libraries
          </div>
        </div>
        {renderCategoryCards()}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    margin: "40px auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  categoryButtons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  categoryButton: {
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  card: {
    width: "100%",
    height: "auto",
    minHeight: "300px",
    position: "relative",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  cardDetails: {
    flexGrow: 1,
    marginBottom: "30px",
  },
  learnMoreButton: {
    marginTop: "auto",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#007bff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },

  // Media query for tablet and desktop version
  "@media (min-width: 768px)": {
    card: {
      width: "calc(50% - 20px)",
    },
  },

  // Media query for large desktop version
  "@media (min-width: 1200px)": {
    card: {
      width: "calc(33.33% - 20px)",
    },
  },
};

export default StudentDashboard;
