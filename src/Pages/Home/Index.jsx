import { Hr } from "../../Components/html"
import Landing from "./Landing"
import Categories from "./Categories"
import PayDay from "../../Components/PayDay"
import AboutUs from "./AboutUs"
import Menu from "./Menu"

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
        </>
    )
}

export default Home
