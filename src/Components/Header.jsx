import { useState } from "react"
import { Link } from "react-router-dom"
import { changeDocTitle } from "../utils/document"

const Header = () => {
    const navBarItems = [
        { key: "home", text: "Home", to: "/" },
        { key: "about", text: "AboutUs", to: "/about" },
        { key: "menu", text: "Menu", to: "/menu" },
        { key: "contact", text: "Contact", to: "/contact" },
    ]

    const [activeNav, setActiveNav] = useState("home")

    return (
        <div className="sticky z-10 mx-auto flex max-w-6xl justify-between bg-transparent p-4">
            <Link to="/" className="font-[Staatliches] text-4xl font-extrabold text-white">
                <span className="text-yellow-400">Food</span>Hub
            </Link>

            <nav
                className="text-md mr-0 hidden flex-col gap-4 font-sans text-slate-100 md:mr-10 md:flex md:flex-row
                [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:rounded-md [&>a]:bg-transparent [&>a]:px-5 
                hover:[&>a]:bg-gray-800"
                aria-label="wide-nav"
            >
                {navBarItems.map((nav) => {
                    return (
                        <Link
                            className={activeNav == nav.key ? "text-yellow-400" : ""}
                            onClick={() => {
                                setActiveNav(nav.key)
                                changeDocTitle(`${nav.text} - FoodHub`)
                            }}
                            to={nav.to}
                        >
                            {nav.text}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default Header
