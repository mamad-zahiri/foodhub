import { Link } from "react-router-dom"
import { changeDocTitle } from "../utils/document"
import { absURL } from "../utils/helper"

const Footer = () => {
    return (
        <footer className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row flex-wrap text-white">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-8 pb-0">
                <h1 className="font-title text-5xl font-bold mb-4">
                    <span className="text-yellow-500">FOOD</span>HUB
                </h1>
                <p className="text-sm capitalize">
                    Well, the person who got down here definitely likes us. This is our end. Or maybe the beginning of your delicious
                    journey!
                </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-8 pb-0">
                <h3 className="font-title text-2xl font-bold tracking-wider mb-2">Support</h3>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <Link to="/faq" onClick={() => changeDocTitle("FAQ - FoodHub")}>
                            FAQ's
                        </Link>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Term & Conditions</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-8 pb-0">
                <h3 className="font-title text-2xl font-bold tracking-wider">phone</h3>
                <a href="" className="">
                    <img src={absURL("/img/icons/phone.webp")} alt="phone" className="inline-block w-5 mr-1" />
                    +98-912-987-6543
                </a>
                <h3 className="font-title text-2xl font-bold tracking-wider mt-6">email</h3>
                <a href="" className="">
                    <img src={absURL("/img/icons/envelope.webp")} alt="envelope" className="inline-block w-5 mr-1" />
                    client@foodhub.com
                </a>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-8 pb-0">
                <h3 className="font-title text-2xl font-bold tracking-wider">follow us</h3>
                <ul className="flex gap-x-4">
                    <li>
                        <a href="">
                            <img src={absURL("/img/icons/telegram.webp")} alt="telegram" className="inline-block w-7" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={absURL("/img/icons/instagram.webp")} alt="instagram" className="inline-block w-7" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={absURL("/img/icons/linkedin.webp")} alt="linkedin" className="inline-block w-7" />
                        </a>
                    </li>
                </ul>
                <h3 className="font-title text-2xl font-bold tracking-wider mt-6">address</h3>
                <a href="" className="">
                    <img src={absURL("/img/icons/location.webp")} alt="location" className="inline-block w-5 mr-1" />
                    JI. Pantai Kuta No. 34, Badung, Bali
                </a>
            </div>
            <hr className="h-[1px] bg-gray-800 w-full border-none mt-8 bg-clip-content px-4" />
            <p className="text-[10px] text-gray-300 text-center w-full my-3">
                Copyright &copy; {new Date().getFullYear()} - All rights reserved
            </p>
        </footer>
    )
}

export default Footer
