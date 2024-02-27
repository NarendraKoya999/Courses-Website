import React, { useState } from "react";
import techRolesData from "../JSONdata/techRoles.json";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const allSkills = techRolesData.reduce((skills, role) => {
    role.skills.forEach((skill) => {
      if (!skills.includes(skill)) {
        skills.push(skill);
      }
    });
    return skills;
  }, []);

  const filteredAndSortedData = techRolesData
    .filter(
      (role) =>
        role.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterTerm === "" || role.skills.includes(filterTerm))
    )
    .sort((a, b) => a.role.localeCompare(b.role));

  const resourceStyle = {
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    width: "100%",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
  };

  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px", // Adjust as needed
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid mt-5 mb-5 text-center p-5 bg-success-subtle">
        <h1 className="mb-4">Course Listing</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by role name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-control"
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
            >
              <option value="">Filter by skill</option>
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          {filteredAndSortedData.map((role) => (
            <div className="col-lg-4 col-md-6 mb-4" key={role.id}>
              <div className="card mb-4" style={cardStyle}>
                <div className="card-header bg-primary text-white">
                  <h2 className="card-title">{role.role}</h2>
                </div>
                <div className="card-body" style={contentStyle}>
                  <div>
                    <h5 className="card-subtitle mb-3">Skills Required:</h5>
                    <p>{role.skills.join(", ")}</p>
                  </div>
                  <div>
                    <h5 className="card-subtitle mb-3">Resources:</h5>
                    {role.resources.map((resource) => (
                      <div style={resourceStyle} key={resource.title}>
                        <h5>
                          <a
                            style={linkStyle}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource.title}
                          </a>
                        </h5>
                        <p>{resource.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseListing;
