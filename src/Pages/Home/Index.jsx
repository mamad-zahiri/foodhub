import { Hr } from "../../Components/html"
import Landing from "./Landing"
import Categories from "./Categories"
import PayDay from "../../Components/PayDay"
import AboutUs from "./AboutUs"
import Menu from "./Menu"
import CustomerReview from "./CustomerReview"
import SpecialOffer from "./SpecialOffer"

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
        </>
    )
}

export default Home
