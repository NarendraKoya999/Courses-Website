import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import SkillSlider from "../Layouts/SkillSlider";
import ContactUs from "../Relevants/ContactUs";
import AboutUs from "../Relevants/AboutUs";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SkillSlider />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainLayout;
