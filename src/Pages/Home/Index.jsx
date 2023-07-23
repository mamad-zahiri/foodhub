import { getImageUrl } from "../../utils/helper"
import { SectionFlex, Hr, BuyOneBtn } from "../../Components/html"

const Home = () => {
    return (
        <>
            {/* landing page background */}
            <div className="-z-10 min-h-fit w-full translate-y-[-72px] transform bg-[url('/home-page-bg.png')] bg-cover bg-no-repeat pt-[72px]">
                {/* landing page: start */}
                <section className="relative flex min-h-[calc(100vh-72px)] w-full items-center bg-gradient-to-b from-transparent to-black">
                    <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center justify-center gap-x-20 gap-y-10 px-4 py-4 md:flex-row md:gap-y-14">
                        <figure className="w-xs px-8 md:w-2/5 md:px-0">
                            <img
                                className="animate-up-down drop-shadow-lg"
                                src={getImageUrl("home-page-landing.png")}
                                alt="food hub hamburger"
                            />
                        </figure>

                        <div className="flex w-full flex-col items-center justify-center gap-y-10 text-center md:w-3/5 md:items-start md:text-left">
                            <h2 className="font-[Staatliches] text-4xl font-extrabold text-white md:text-6xl">
                                ENJOY <span className="text-yellow-400">FOOD</span>HUB MAKE YOUR TUMMY HAPPY
                            </h2>

                            <hr className="h-0.5 w-[200px] rounded-full border-yellow-400 bg-yellow-400" />

                            <p className="text-sm text-slate-300">
                                Fast Food, Faster Service. Our delicious menu options and commitment to quality ingredients make us the
                                ultimate destination for foodies on the go. <span className="text-yellow-400 underline">Try us today!</span>
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 md:justify-start">
                                <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                    <img src={getImageUrl("home-page-spoon-and-fork.png")} alt="spoon and fork" className="w-1/2" />
                                    <figcaption className="text-sm font-bold text-white">Delicious</figcaption>
                                </figure>

                                <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                    <img src={getImageUrl("home-page-drop.png")} alt="spoon and fork" className="w-1/2" />
                                    <figcaption className="text-sm font-bold text-white">Fresh</figcaption>
                                </figure>

                                <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                    <img src={getImageUrl("home-page-leaf.png")} alt="spoon and fork" className="w-1/2" />
                                    <figcaption className="text-sm font-bold text-white">Organic</figcaption>
                                </figure>

                                <a
                                    href=""
                                    className="duration-400 flex h-[40px] flex-shrink-0 items-center justify-center rounded-md bg-yellow-400 p-5 text-sm font-bold text-slate-900 transition-all hover:-translate-y-1 hover:transform hover:shadow-md hover:shadow-gray-700"
                                >
                                    More<span className="hidden sm:inline">&nbsp;...</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* landing page: start */}
            </div>

            <Hr />

            {/* categories: start */}
            <SectionFlex className="gap-x-20 gap-y-10 p-4 md:gap-y-14">
                <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-red-700 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                    <img
                        src={getImageUrl("home-categories-hamburger.png")}
                        className="absolute bottom-2 left-[-18px] w-44 drop-shadow-dark"
                        alt="Hamburger"
                    />
                    <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                        <h4 className="font-[Staatliches] text-4xl text-white">FOOD</h4>
                        <p className="text-xs text-white">A warm family dinner</p>
                        <BuyOneBtn href="" fg="text-red-700" />
                    </div>
                </div>

                <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-green-700 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                    <img
                        src={getImageUrl("home-categories-chips.png")}
                        className="absolute bottom-3 left-[-25px] w-48 drop-shadow-dark"
                        alt="Hamburger"
                    />
                    <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                        <h4 className="font-[Staatliches] text-4xl text-white">SNACK</h4>
                        <p className="text-xs text-white">Have with your friends</p>
                        <BuyOneBtn fg="text-green-700" />
                    </div>
                </div>

                <div className="relative flex h-32 w-80 items-center justify-end rounded-xl bg-amber-500 shadow-2xl shadow-slate-800 [&>img]:hover:animate-wiggle">
                    <img
                        src={getImageUrl("home-categories-smoothie.png")}
                        className="absolute bottom-2 left-[0px] w-36 transform drop-shadow-dark"
                        alt="Hamburger"
                    />
                    <div className="flex w-1/2 flex-col items-start justify-center gap-y-1">
                        <h4 className="font-[Staatliches] text-4xl text-white">BEVERAGE</h4>
                        <p className="text-xs text-white">For your hot days</p>
                        <BuyOneBtn fg="text-amber-600" />
                    </div>
                </div>
            </SectionFlex>
            {/* categories: end */}

            <Hr />

            {/* payDay promo: start */}
            <SectionFlex className="my-14">
                <div className="mb-5 max-w-[500px] px-5">
                    <div className="flex items-center justify-between rounded-md bg-slate-800 bg-opacity-50 shadow-lg">
                        <div className="flex w-3/5 flex-col items-start justify-center gap-y-2 px-4 py-4 sm:py-8">
                            <p className="text-[11px] text-yellow-400 sm:text-xs">PayDay Promo</p>
                            <h4 className="font-[Staatliches] text-3xl text-white">GET 10% DISCOUNT ON PAYDAY WEEK</h4>
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
                            <h4 className="font-[Staatliches] text-3xl text-white">BUY 1 COKE GET MORE 1 FREE COKE</h4>
                            <h4 className="text-xs text-slate-400">Enjoy having free drink with your friend with us.</h4>
                            <BuyOneBtn bg="bg-yellow-400" />
                        </div>
                        <figure className="flex w-2/5 items-center justify-center">
                            <img src={getImageUrl("home-off-drink.png")} alt="cola drink off" className="w-44 drop-shadow-dark" />
                        </figure>
                    </div>
                </div>
            </SectionFlex>
            {/* payDay promo: end */}

            <Hr />

            {/* about us: start */}
            <SectionFlex className="gap-x-8 px-4 lg:px-0">
                <figure className="mb-7 flex w-full lg:mb-0 lg:w-1/2">
                    <img src={getImageUrl("home-our-brand.jpg")} alt="foodhub brand" className="max-w-full rotate-180 rounded-2xl" />
                </figure>

                <div className="flex w-full flex-col items-center justify-center gap-y-7 text-center sm:items-start sm:text-left lg:w-1/2">
                    <h4 className="font-[Staatliches] text-5xl text-white">FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</h4>
                    <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-1/4" />
                    <p className="text-sm text-slate-300">
                        This is FoodHub! Welcome to our awesome fast food joint. We're all about serving up mouth-watering burgers, and
                        yummy snacks to satisfy your cravings. We take pride in using only the freshest ingredients and making sure that our
                        food is prepared with love. So, come on over and kick back in our chill atmosphere while you enjoy some seriously
                        good eats. We can't wait to see you!
                    </p>
                    <ul
                        className="flex flex-row flex-wrap gap-y-2 text-sm text-white
                        [&>li>img]:mr-2 [&>li>img]:h-auto [&>li>img]:w-4 [&>li]:flex [&>li]:w-1/2"
                    >
                        <li>
                            <img src={getImageUrl("check.png")} alt="check" /> Best Price
                        </li>
                        <li>
                            <img src={getImageUrl("check.png")} alt="check" /> Best Service
                        </li>
                        <li>
                            <img src={getImageUrl("check.png")} alt="check" /> Fresh Ingredient
                        </li>
                        <li>
                            <img src={getImageUrl("check.png")} alt="check" /> Health Protocol
                        </li>
                    </ul>
                    <button className="rounded-sm bg-yellow-500 px-7 py-3 font-normal">About Us</button>
                </div>
            </SectionFlex>
            {/* about us: end */}
        </>
    )
}

export default Home
