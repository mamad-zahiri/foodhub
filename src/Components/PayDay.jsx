import { getImageUrl } from "../utils/helper"
import { BuyOneBtn } from "./html"

const PayDay = () => {
    return (
        <section className=" mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row my-14">
            <div className="mb-5 max-w-[500px] px-5">
                <div className="flex items-center justify-between rounded-md bg-slate-800 bg-opacity-50 shadow-lg">
                    <div className="flex w-3/5 flex-col items-start justify-center gap-y-2 px-4 py-4 sm:py-8">
                        <p className="text-[11px] text-yellow-400 sm:text-xs">PayDay Promo</p>
                        <h4 className="font-title text-3xl text-white">GET 10% DISCOUNT ON PAYDAY WEEK</h4>
                        <h4 className="text-xs text-slate-400">Get 10% discount on our bigget Burger on this week.</h4>
                        <BuyOneBtn bg="bg-yellow-400" />
                    </div>
                    <figure className="flex w-2/5 items-center justify-center">
                        <img src={getImageUrl("home-off-hamburger.png")} alt="cola drink off" className="w-44 drop-shadow-dark" />
                    </figure>
                </div>
            </div>

            <div className="mb-5 max-w-[500px] px-5">
                <div className="flex items-center justify-between rounded-md bg-slate-800 bg-opacity-50 shadow-lg">
                    <div className="flex w-3/5 flex-col items-start justify-center gap-y-2 px-4 py-4 sm:py-8">
                        <p className="text-[11px] text-yellow-400 sm:text-xs">PayDay Promo</p>
                        <h4 className="font-title text-3xl text-white">BUY 1 COKE GET MORE 1 FREE COKE</h4>
                        <h4 className="text-xs text-slate-400">Enjoy having free drink with your friend with us.</h4>
                        <BuyOneBtn bg="bg-yellow-400" />
                    </div>
                    <figure className="flex w-2/5 items-center justify-center">
                        <img src={getImageUrl("home-off-drink.png")} alt="cola drink off" className="w-44 drop-shadow-dark" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default PayDay
