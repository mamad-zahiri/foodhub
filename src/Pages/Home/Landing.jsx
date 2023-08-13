import { absURL } from "../../utils/helper"

const Landing = () => {
    return (
        // landing page background
        <div className="-z-10 min-h-screen w-full bg-[url('/img/bg/home.webp')] bg-cover bg-no-repeat">
            {/* landing page: start */}
            <section className="relative flex min-h-screen w-full items-center bg-gradient-to-b from-transparent to-black">
                <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center justify-center gap-x-20 gap-y-10 px-4 py-4 md:flex-row md:gap-y-14">
                    <figure className="w-xs px-8 lg:w-2/5 block sm:hidden md:px-0">
                        <img
                            className="animate-up-down drop-shadow-lg"
                            src={absURL("/img/home/landing/big-hamburger.webp")}
                            alt="food hub hamburger"
                        />
                    </figure>

                    <div className="flex w-full flex-col items-center justify-center gap-y-10 text-center md:w-3/5 md:items-start md:text-left">
                        <h2 className="font-title text-4xl font-extrabold text-white md:text-6xl">
                            ENJOY <span className="text-yellow-400">FOOD</span>HUB MAKE YOUR TUMMY HAPPY
                        </h2>

                        <hr className="h-0.5 w-[200px] rounded-full border-yellow-400 bg-yellow-400" />

                        <p className="text-sm text-slate-300">
                            Fast Food, Faster Service. Our delicious menu options and commitment to quality ingredients make us the ultimate
                            destination for foodies on the go. <span className="text-yellow-400 underline">Try us today!</span>
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 md:justify-start">
                            <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                <img src={absURL("/img/home/landing/spoon-fork.webp")} alt="spoon and fork" className="w-1/2" />
                                <figcaption className="text-sm font-bold text-white">Delicious</figcaption>
                            </figure>

                            <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                <img src={absURL("/img/home/landing/drop.webp")} alt="spoon and fork" className="w-1/2" />
                                <figcaption className="text-sm font-bold text-white">Fresh</figcaption>
                            </figure>

                            <figure className="flex max-w-[100px] flex-shrink-[0.3] flex-col items-center justify-center gap-4">
                                <img src={absURL("/img/home/landing/leaf.webp")} alt="spoon and fork" className="w-1/2" />
                                <figcaption className="text-sm font-bold text-white">Organic</figcaption>
                            </figure>

                            <a href="" className="rounded-md bg-yellow-400 p-3 px-6 text-sm text-black">
                                More ...
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* landing page: start */}
        </div>
    )
}

export default Landing
