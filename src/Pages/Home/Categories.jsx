import { BuyOneBtn } from "../../Components/html"
import { absURL } from "../../utils/helper"

const Categories = () => {
    return (
        <section className="mx-auto my-14 max-w-6xl flex flex-col flex-wrap items-center justify-center md:flex-row gap-x-20 gap-y-10 p-4 md:gap-y-14">
            <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-red-700 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                <img
                    src={absURL("/img/home/categories/hamburger.webp")}
                    className="absolute bottom-2 left-[-18px] w-44 drop-shadow-dark"
                    alt="Hamburger"
                />
                <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                    <h4 className="font-title text-4xl text-white">FOOD</h4>
                    <p className="text-xs text-white">A warm family dinner</p>
                    <BuyOneBtn href="" fg="text-red-700" />
                </div>
            </div>

            <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-green-700 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                <img
                    src={absURL("/img/home/categories/chips.webp")}
                    className="absolute bottom-3 left-[-25px] w-48 drop-shadow-dark"
                    alt="Hamburger"
                />
                <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                    <h4 className="font-title text-4xl text-white">SNACK</h4>
                    <p className="text-xs text-white">Have with your friends</p>
                    <BuyOneBtn fg="text-green-700" />
                </div>
            </div>

            <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-amber-500 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                <img
                    src={absURL("/img/home/categories/smoothie.webp")}
                    className="absolute bottom-2 left-[0px] w-36 transform drop-shadow-dark"
                    alt="Smoothie"
                />
                <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                    <h4 className="font-title text-4xl text-white">BEVERAGE</h4>
                    <p className="text-xs text-white">For your hot days</p>
                    <BuyOneBtn fg="text-amber-600" />
                </div>
            </div>
        </section>
    )
}

export default Categories
