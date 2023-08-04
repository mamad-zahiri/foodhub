import { Hr } from "../../Components/html"
import Landing from "./Landing"
import Categories from "./Categories"
import PayDay from "../../Components/PayDay"
import AboutUs from "./AboutUs"
import Menu from "./Menu"
import CustomerReview from "./CustomerReview"
import SpecialOffer from "./SpecialOffer"
import NewsAndArticles from "./NewsAndArticles"
import Subscribe from "../../Components/Subscribe"
import Footer from "../../Components/Footer"

const Home = () => {
    return (
        <>
            <Landing />
            <Hr />
            <Categories />
            <Hr />
            <PayDay />
            <Hr />
            <AboutUs />
            <Hr />
            <Menu />
            <CustomerReview />
            <SpecialOffer />
            <NewsAndArticles />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home
