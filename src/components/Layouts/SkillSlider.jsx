import React from "react";
import Slider from "react-slick";

// Importing slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillSlider() {
  const jobRoles = [
    {
      role: "Software Engineer",
      icon: "fas fa-laptop-code",
      description: "Develop software solutions to meet clients’ needs.",
    },
    {
      role: "AI Engineer",
      icon: "fas fa-robot",
      description: "Develop intelligent systems and algorithms.",
    },
    {
      role: "Data Scientist",
      icon: "fas fa-chart-line",
      description: "Analyze complex datasets to extract insights.",
    },
    {
      role: "Product Manager",
      icon: "fas fa-tasks",
      description: "Oversee the development and launch of new products.",
    },
    {
      role: "Software Tester",
      icon: "fas fa-bug",
      description: "Test software to ensure it meets client expectations.",
    },
    {
      role: "UI/UX Designer",
      icon: "fas fa-paint-brush",
      description: "Design user interfaces for web and mobile applications.",
    },
    {
      role: "Graphic Designer",
      icon: "fas fa-palette",
      description: "Design visual content for print and digital media.",
    },
    {
      role: "Cloud Architect",
      icon: "fas fa-cloud",
      description: "Design and implement cloud solutions to meet client needs.",
    },
    {
      role: "DevOps Engineer",
      icon: "fas fa-tools",
      description: "Deploy and maintain software applications.",
    },
    {
      role: "Full Stack Developer",
      icon: "fas fa-layer-group",
      description: "Develop full-stack web and mobile applications.",
    },
    {
      role: "Blockchain Developer",
      icon: "fas fa-cube",
      description: "Develop decentralized applications using blockchain.",
    },
    {
      role: "Frontend Developer",
      icon: "fas fa-desktop",
      description: "Develop web applications using HTML, CSS, and JavaScript.",
    },
    {
      role: "Backend Developer",
      icon: "fas fa-server",
      description:
        "Develop server-side applications using Node.js, Express.js, and MongoDB.",
    },
    {
      role: "Mobile Developer",
      icon: "fas fa-mobile-alt",
      description:
        "Develop mobile applications using React Native and Flutter.",
    },
    {
      role: "Embedded Developer",
      icon: "fas fa-microchip",
      description: "Develop embedded systems using C and Arduino.",
    },
    {
      role: "Data Analyst",
      icon: "fas fa-chart-bar",
      description: "Analyze and interpret data to provide actionable insights.",
    },
    {
      role: "System Administrator",
      icon: "fas fa-cogs",
      description: "Manage computer systems and networks.",
    },
    {
      role: "IT Support",
      icon: "fas fa-headset",
      description: "Provide technical support and troubleshooting.",
    },
    {
      role: "Cybersecurity Analyst",
      icon: "fas fa-shield-alt",
      description: "Analyze and respond to security threats.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <h1 className="text-center mb-4">Find Your Role in Tech</h1>
        <Slider {...settings}>
          {jobRoles.map((job, index) => (
            <div key={index} className="text-center p-4">
              <h2 className="mb-3">{job.role}</h2>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <i
                  className={`${job.icon} fa-5x bg-success text-light p-3 rounded-circle`}
                ></i>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SkillSlider;
