import { useState } from "react"
import { Link } from "react-router-dom"
import { changeDocTitle } from "../utils/document"

const navBarItems = [
    { key: "home", text: "Home", to: "/" },
    { key: "about", text: "AboutUs", to: "/about" },
    { key: "menu", text: "Menu", to: "/menu" },
    { key: "contact", text: "Contact", to: "/contact" },
]

const showNav = () => {
    document.getElementById("mobile-nav-wrapper").style.display = "block"
    document.getElementById("mobile-nav").classList.add("animate-mobile-nav-show")
    document.getElementById("mobile-nav-overlay").style.width = "100%"
}

const hideNav = () => {
    document.getElementById("mobile-nav-wrapper").style.display = "none"
}

const Navbar = () => {
    let navElement
    document.addEventListener("scroll", (e) => {
        navElement = document.getElementById("nav-wrapper")
        if (navElement) {
            if (window.scrollY > 50) {
                navElement.classList.add("navbar-scrolled-bg")
                navElement.classList.remove("animate-navbar-fade-out")
            } else {
                navElement.classList.remove("navbar-scrolled-bg")
                navElement.classList.add("animate-navbar-fade-out")
            }
        }
    })

    const [activeNav, setActiveNav] = useState("home")

    return (
        <div className="fixed top-0 left-0 z-10 w-full">
            {/* desktop nabvar: start */}
            <div id="nav-wrapper">
                <div className="mx-auto flex max-w-6xl justify-between bg-transparent p-3">
                    {/* mobile menu button: start */}
                    <button className="block md:hidden" onClick={showNav}>
                        <span className="block w-6 h-0.5 m-1.5 rounded-full bg-white"></span>
                        <span className="block w-6 h-0.5 m-1.5 rounded-full bg-white"></span>
                        <span className="block w-6 h-0.5 m-1.5 rounded-full bg-white"></span>
                    </button>
                    {/* mobile menu button: end */}

                    {/* navbar brand: start */}
                    <Link to="/" className="font-title text-4xl mt-0.5 font-extrabold text-white">
                        <span className="text-yellow-400">Food</span>Hub
                    </Link>
                    {/* navbar brand: end */}

                    {/* nabvar: start */}
                    <nav
                        className="text-md hidden md:flex md:items-center my-auto gap-4 text-slate-100 flex-col md:flex-row hover:[&>a]:text-yellow-500"
                        aria-label="wide-nav"
                    >
                        {navBarItems.map((nav) => {
                            return (
                                <Link
                                    className={`px-5 font-bold ${
                                        activeNav == nav.key ? "text-yellow-400 underline underline-offset-4" : ""
                                    }`}
                                    onClick={() => {
                                        setActiveNav(nav.key)
                                        changeDocTitle(`${nav.text} - FoodHub`)
                                    }}
                                    to={nav.to}
                                    key={nav.key}
                                >
                                    {nav.text}
                                </Link>
                            )
                        })}
                    </nav>
                    {/* nabvar: end */}
                </div>
            </div>
            {/* desktop nabvar: end */}

            {/* mobile navbar: start */}
            <div
                id="mobile-nav-wrapper"
                className="md:hidden hidden fixed top-0 h-screen w-full bg-gray-950 bg-opacity-60 backdrop-blur-lg"
            >
                {/* overlay */}
                <div className="h-screen absolute w-full right-0 top-0" id="mobile-nav-overlay" onClick={hideNav}></div>
                {/* navbar: start */}
                <nav
                    id="mobile-nav"
                    className="text-xl gap-y-4 absolute top-0 left-0 text-slate-100 flex flex-col max-w-fit p-3 pt-8 bg-gray-800 bg-opacity-60 h-screen"
                    aria-label="mobile-nav"
                >
                    {navBarItems.map((nav) => {
                        return (
                            <Link
                                className={`px-5 font-bold ${activeNav == nav.key ? "text-yellow-400 underline underline-offset-4" : ""}`}
                                onClick={() => {
                                    setActiveNav(nav.key)
                                    changeDocTitle(`${nav.text} - FoodHub`)
                                    hideNav()
                                }}
                                to={nav.to}
                                key={nav.key}
                            >
                                {nav.text}
                            </Link>
                        )
                    })}
                </nav>
                {/* navbar: end */}
            </div>
            {/* mobile navbar: end */}
        </div>
    )
}

export default Navbar
