import { Hr } from "../../Components/html"
import Landing from "./Landing"
import Categories from "./Categories"
import PayDay from "../../Components/PayDay"
import AboutUs from "./AboutUs"
import Menu from "./Menu"
import CustomerReview from "../../Components/CustomerReview"
import SpecialOffer from "../../Components/SpecialOffer"
import NewsAndArticles from "./NewsAndArticles"

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
        </>
    )
}

export default Home
