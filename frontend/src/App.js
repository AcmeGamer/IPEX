import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import React from "react"

// Components
import Header, { HeaderV2 } from "./components/header-footer/header"
import Footer, { FooterV2 } from "./components/header-footer/footer"

// Pages
import Home from "./pages/index"
import About from "./pages/about"
import HTMLCourse from "./pages/html-course"
import ReactCourse from "./pages/react-course"
import ICP from "./pages/icp"
import Solidity from "./pages/solidity"
import Profile from "./pages/profile"
import Track from "./pages/track"

export default function App() {
  return (
    <>
      {/* Create a Route */}
      <Router>
        {/* <Header /> */}
        <HeaderV2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/html-course" element={<HTMLCourse />} />
          <Route path="/react-course" element={<ReactCourse />} />
          <Route path="/solidity" element={<Solidity />} />
          <Route path="/icp" element={<ICP />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
      <FooterV2 />
    </>
  )
}
