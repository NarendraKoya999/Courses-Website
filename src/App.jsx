import React from 'react'
import './App.css'
import CourseListing from './components/MainContent/CourseListing'
import StudentDashboard from './components/MainContent/StudentDashboard'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import ContactUs from './components/Relevants/ContactUs'
import AboutUs from './components/Relevants/AboutUs'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/course-listing" element={<CourseListing />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
