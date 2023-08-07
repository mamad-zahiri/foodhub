import { fadeIn } from "../../utils/style"
import { getImageUrl } from "../../utils/helper"
import { BuyOneBtn, paginationCurrentButton, paginationButton } from "../../Components/html"
import { useState, useEffect } from "react"
import axios from "axios"

const categories = [
    { key: "food", display: "Food" },
    { key: "starter", display: "Starter" },
    { key: "beverage", display: "Beverage" },
]

const itemPerPage = 4

let menuCache = { food: null, starter: null, beverage: null }

// this function gonna change due to backend
const getMenu = async (category, setMenu, pageNo) => {
    const pageStart = (pageNo - 1) * itemPerPage
    if (menuCache[category] !== null) return setMenu(menuCache[category].slice(pageStart, pageStart + itemPerPage))

    await axios
        .get(`${import.meta.env.BASE_URL}data/menu.json`)
        .then((response) => {
            menuCache[category] = response.data[category]
            if (menuCache[category]) {
                setMenu(menuCache[category].slice(pageStart, pageStart + itemPerPage))
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

const maxPageNo = (menuLen) => {
    const a = menuLen / itemPerPage
    const b = Number((menuLen / itemPerPage).toFixed(0))
    if (a > b) return b + 1
    return b
}

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("food")
    const [menu, setMenu] = useState([])
    const [menuLen, setMenuLen] = useState(0)
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        if (!pageNo) setPageNo(1)

        getMenu(selectedCategory, setMenu, pageNo).then(() => {
            setMenuLen(() => {
                console.log(menuCache[selectedCategory].length)
                return menuCache[selectedCategory].length
            })

            fadeIn(document.getElementById(`menu-${selectedCategory}`))
        })
    }, [selectedCategory, pageNo])

    useEffect(() => {
        setPageNo(1)
    }, [selectedCategory])

    return (
        <section className="mx-auto my-6 flex max-w-6xl flex-col items-center justify-center px-4">
            <ul aria-label="menu-category-nav" className="text-md flex items-center justify-center gap-x-8 text-white">
                {categories.map((item) => (
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

            {/* top pagination: start */}
            <div className="p-4 mx-auto w-fit text-sm text-white [&>button]:mx-2">
                <button
                    className="underline underline-offset-2 text-white hover:text-yellow-500"
                    onClick={() => setPageNo((pn) => (pn > 1 ? pn - 1 : pn))}
                >
                    prev
                </button>

                {pageNo == 1 ? paginationCurrentButton(1) : paginationButton(1, (e) => setPageNo(1))}

                {/* 1 ... n-1 n: pageNo <  */}
                {maxPageNo(menuLen) >= 4 && pageNo >= 3 && "..."}

                {/* for active pages more than first and last */}
                {maxPageNo(menuLen) >= 3 &&
                    pageNo !== 1 &&
                    pageNo !== maxPageNo(menuLen) &&
                    (pageNo !== 1 && pageNo !== maxPageNo(menuLen) ? paginationCurrentButton(pageNo) : paginationButton(pageNo))}

                {maxPageNo(menuLen) >= 3 && pageNo == 1 && paginationButton(2, (e) => setPageNo(2))}

                {maxPageNo(menuLen) >= 3 &&
                    pageNo == maxPageNo(menuLen) &&
                    paginationButton(maxPageNo(menuLen) - 1, (e) => setPageNo(maxPageNo(menuLen) - 1))}

                {/* 1 2 ... n: 2 < pageNo  */}
                {maxPageNo(menuLen) >= 4 && pageNo <= maxPageNo(menuLen) - 2 && "..."}

                {pageNo == maxPageNo(menuLen)
                    ? paginationCurrentButton(maxPageNo(menuLen))
                    : paginationButton(maxPageNo(menuLen), (e) => setPageNo(maxPageNo(menuLen)))}

                <button
                    className="underline underline-offset-2 text-white hover:text-yellow-500"
                    onClick={() => setPageNo((pn) => (pn * itemPerPage < menuLen ? pn + 1 : pn))}
                >
                    next
                </button>
            </div>
            {/* top pagination: end */}

            {/* menu items: start */}
            <div id={`menu-${selectedCategory}`} className="flex w-full flex-wrap justify-center">
                {menu.map((item) => (
                    <div className="mb-3 p-1 w-full sm:w-1/2 lg:w-1/4" key={item.id}>
                        <div className="p-8 pt-0 text-white relative h-full text-left rounded-lg">
                            <div className="aspect-square w-full flex items-center justify-center mb-5">
                                <div
                                    style={{
                                        background: `url(./img/${item.imageURL})`,
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
                                <h3 className="mb-2 font-title text-3xl sm:text-2xl tracking-wide font-bold">{item.name}</h3>
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
            {/* menu items: end */}

            {/* bottom pagination: start (for tablet & mobile) */}
            <div className="lg:hidden p-4 mx-auto w-fit text-sm text-white [&>button]:mx-2">
                <button
                    className="underline underline-offset-2 text-white hover:text-yellow-500"
                    onClick={() => setPageNo((pn) => (pn > 1 ? pn - 1 : pn))}
                >
                    prev
                </button>

                {pageNo == 1 ? paginationCurrentButton(1) : paginationButton(1, (e) => setPageNo(1))}

                {/* 1 ... n-1 n: pageNo <  */}
                {maxPageNo(menuLen) >= 4 && pageNo >= 3 && "..."}

                {/* for active pages more than first and last */}
                {maxPageNo(menuLen) >= 3 &&
                    pageNo !== 1 &&
                    pageNo !== maxPageNo(menuLen) &&
                    (pageNo !== 1 && pageNo !== maxPageNo(menuLen) ? paginationCurrentButton(pageNo) : paginationButton(pageNo))}

                {maxPageNo(menuLen) >= 3 && pageNo == 1 && paginationButton(2, (e) => setPageNo(2))}

                {maxPageNo(menuLen) >= 3 &&
                    pageNo == maxPageNo(menuLen) &&
                    paginationButton(maxPageNo(menuLen) - 1, (e) => setPageNo(maxPageNo(menuLen) - 1))}

                {/* 1 2 ... n: 2 < pageNo  */}
                {maxPageNo(menuLen) >= 4 && pageNo <= maxPageNo(menuLen) - 2 && "..."}

                {pageNo == maxPageNo(menuLen)
                    ? paginationCurrentButton(maxPageNo(menuLen))
                    : paginationButton(maxPageNo(menuLen), (e) => setPageNo(maxPageNo(menuLen)))}

                <button
                    className="underline underline-offset-2 text-white hover:text-yellow-500"
                    onClick={() => setPageNo((pn) => (pn * itemPerPage < menuLen ? pn + 1 : pn))}
                >
                    next
                </button>
            </div>
            {/* bottom pagination: end */}
        </section>
    )
}

export default Menu
