import { Route, Routes } from "react-router-dom"
import React from "react"

import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/Index"
import About from "./Pages/About/Index"
import Contact from "./Pages/Contact/Index"
import Menu from "./Pages/Menu/Index"
import Reservation from "./Pages/Reservation/Index"
import FAQ from "./Pages/FAQ/Index"
import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"

// const Home = React.lazy(() => import("./Pages/Home/Index"))
// const About = React.lazy(() => import("./Pages/About/Index"))
// const Contact = React.lazy(() => import("./Pages/Contact/Index"))
// const Menu = React.lazy(() => import("./Pages/Menu/Index"))

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/contact" Component={Contact} />
                <Route path="/about" Component={About} />
                <Route path="/menu" Component={Menu} />
                <Route path="/faq" Component={FAQ} />
                <Route path="/reservation" Component={Reservation} />
                <Route exact path="/" Component={Home} />
            </Routes>

            <Subscribe />
            <Footer />
        </>
    )
}

export default App
