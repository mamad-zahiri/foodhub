import { fadeIn } from "../../utils/style"
import { getImageUrl } from "../../utils/helper"
import { BuyOneBtn } from "../../Components/html"
import { useState, useEffect } from "react"
import axios from "axios"

const menuCategories = [
    { key: "food", display: "Food" },
    { key: "starter", display: "Starter" },
    { key: "beverage", display: "Beverage" },
]

let bestMenu = { food: null, starter: null, beverage: null }

// this function gonna change due to backend
const categoriesTop4 = async (category, setMenu) => {
    if (bestMenu[category] !== null) return setMenu(bestMenu[category])

    await axios
        .get(`${import.meta.env.BASE_URL}data/menu.json`)
        .then((response) => {
            setMenu((old) => {
                bestMenu[category] = response.data[category].sort((a, b) => b.rank - a.rank).slice(0, 4)
                return bestMenu[category]
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("food")
    const [bestMenu, setBestMenu] = useState([])

    useEffect(() => {
        categoriesTop4(selectedCategory, setBestMenu)
        fadeIn(document.getElementById(`bestMenu-${selectedCategory}`))
    }, [selectedCategory])

    return (
        <section className="mx-auto my-14 flex max-w-6xl flex-col items-center justify-center gap-x-8 gap-y-8 px-4">
            <h3 className="font-[Staatliches] text-5xl text-white ">OUR BEST MENU</h3>
            <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-[150px]" />
            <p className="text-white text-center">
                Rated by Our Clients: Discover the Top 4 Food, Beverage, and Starter Items in Each Category!
            </p>

            <ul className="text-md flex items-center justify-center gap-x-8 text-white">
                {menuCategories.map((item) => (
                    <li
                        className={`rounded-lg px-4 py-2 sm:px-8 sm:py-4 transition-all ${
                            selectedCategory == item.key ? "bg-yellow-500 text-gray-900" : "bg-[#0f141d]"
                        } hover:cursor-pointer hover:bg-yellow-500 hover:text-gray-900`}
                        onClick={() => setSelectedCategory(item.key)}
                        key={item.key}
                    >
                        {item.display}
                    </li>
                ))}
            </ul>

            <div id={`bestMenu-${selectedCategory}`} className="flex w-full flex-wrap justify-center">
                {bestMenu.map((item) => (
                    <div className="mb-3 p-1 w-full sm:w-1/2 lg:w-1/4" key={item.id}>
                        <div className="p-9 bg-[#111] text-white relative h-full text-left shadow-lg shadow-[#0d0d0d] rounded-sm">
                            <div className="aspect-square w-full flex items-center justify-center mb-5">
                                <div
                                    style={{
                                        background: `url(/img/${item.imageURL})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                    className="flex justify-start items-start h-full overflow-hidden w-full rounded-3xl
                                [&>small]:hover:bg-opacity-50 [&>small]:hover:drop-shadow-lg [&>small]:hover:text-lg [&>small]:hover:py-2 [&>small]:hover:px-5 [&>small]:transition-all
                                [&>small>img]:hover:h-5 [&>small>img]:hover:grayscale-0"
                                >
                                    <small className="flex gap-x-1 justify-center backdrop-blur-md items-center rounded-br-3xl px-4 py-1 font-bold bg-slate-900 bg-opacity-20 text-md">
                                        <img
                                            className="inline-block grayscale h-4 mt-0.5 drop-shadow-md"
                                            src={getImageUrl("icon-heart-yellow-500.png")}
                                            alt=""
                                        />
                                        <span>{item.rank} / 10</span>
                                    </small>
                                </div>
                            </div>
                            <div className="px-1">
                                <h3 className="mb-2 font-t-itle text-3xl sm:text-xl tracking-wide font-bold">{item.name}</h3>
                                <p className="text-xs mb-7 text-slate-400">{item.description}</p>
                                <strong className="block drop-shadow-dark text-yellow-500 text-2xl font-title mb-2 absolute bottom-2 left-11">
                                    $ {item.price.toFixed(1)}
                                </strong>
                                <BuyOneBtn bg="bg-yellow-500" className="justify-self-center max-w-fit absolute bottom-3 right-11 mb-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Menu
