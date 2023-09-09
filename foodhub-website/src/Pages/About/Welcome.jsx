import { absURL } from "../../utils/helper"

const Welcome = () => {
    return (
        <section className="flex max-w-6xl mx-auto text-white gap-x-7 p-4 pb-12">
            <figure className="w-1/2 hidden md:block">
                <div
                    style={{
                        backgroundImage: `url('${absURL("/img/bg/about-us.webp")}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="w-full h-full rounded-xl"
                ></div>
            </figure>

            <div className="w-full md:w-1/2">
                <h4 className="font-title text-5xl font-bold text-center md:text-left">
                    Welcome to <span className="text-yellow-500">Food</span>Hub, our family, our work
                </h4>

                <hr className="h-0.5 w-48 mx-auto md:mx-0 rounded-full border-yellow-400 bg-yellow-400 mt-2 mb-6" />

                <p className="mb-6">
                    It is FoodHub, where we have revolutionized the online fast food experience. With our unwavering commitment to quality,
                    we offer mouthwatering burgers, refreshing beverages, and delectable snacks. Our team of passionate food enthusiasts
                    carefully selects the finest ingredients to ensure each dish is crafted with precision and care. Join us on a culinary
                    journey as we redefine fast food with exceptional flavors and impeccable service. Discover the magic of FoodHub, where
                    convenience meets culinary excellence.
                </p>
                <h6 className="font-handwriting text-4xl text-right pr-6">Mohamad Zahiri</h6>
                <strong className="block text-right pr-6">Mohamd Zahiri, Designer</strong>
            </div>
        </section>
    )
}

export default Welcome
