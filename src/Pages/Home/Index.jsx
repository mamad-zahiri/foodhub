import { Hr } from "../../Components/html"
import Landing from "./Landing"
import Categories from "./Categories"
import PayDay from "../../Components/PayDay"
import AboutUs from "./AboutUs"

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
        </>
    )
}

export default Home
