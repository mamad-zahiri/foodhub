import { SectionFlex } from "../../Components/html"
import { getImageUrl } from "../../utils/helper"

const AboutUs = () => {
    return (
        <SectionFlex className="gap-x-8 px-4 lg:px-0">
            <figure className="mb-7 flex w-full lg:mb-0 lg:w-1/2">
                <img src={getImageUrl("home-our-brand.jpg")} alt="foodhub brand" className="max-w-full rotate-180 rounded-2xl" />
            </figure>

            <div className="flex w-full flex-col items-center justify-center gap-y-7 text-center sm:items-start sm:text-left lg:w-1/2">
                <h4 className="font-[Staatliches] text-5xl text-white">FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</h4>
                <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-1/4" />
                <p className="text-sm text-slate-300">
                    This is FoodHub! Welcome to our awesome fast food joint. We're all about serving up mouth-watering burgers, and yummy
                    snacks to satisfy your cravings. We take pride in using only the freshest ingredients and making sure that our food is
                    prepared with love. So, come on over and kick back in our chill atmosphere while you enjoy some seriously good eats. We
                    can't wait to see you!
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
    )
}

export default AboutUs