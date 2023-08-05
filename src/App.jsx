import { Route, Routes } from "react-router-dom"
import React from "react"

import Header from "./Components/Header"
import Home from "./Pages/Home/Index"
import About from "./Pages/About/Index"
import Contact from "./Pages/Contact/Index"
import Menu from "./Pages/Menu/Index"
import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"

// const Home = React.lazy(() => import("./Pages/Home/Index"))
// const About = React.lazy(() => import("./Pages/About/Index"))
// const Contact = React.lazy(() => import("./Pages/Contact/Index"))
// const Menu = React.lazy(() => import("./Pages/Menu/Index"))

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>

            <Subscribe />
            <Footer />
        </>
    )
}

export default App
