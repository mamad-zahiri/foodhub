import { getImageUrl } from "../../utils/helper"

const Landing = () => {
    return (
        // landing page background
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
                            Fast Food, Faster Service. Our delicious menu options and commitment to quality ingredients make us the ultimate
                            destination for foodies on the go. <span className="text-yellow-400 underline">Try us today!</span>
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
    )
}

export default Landing
