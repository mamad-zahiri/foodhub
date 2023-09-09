import { useLocation } from "react-router-dom"
import { Hr, Header } from "../../Components/html"
import PayDay from "../../Components/PayDay"
import MenuSection from "./Menu"

const pageTitle = "menu"
const pageDescription = "Fast Food, Faster Service. Our delicious menu options make us the ultimate destination for foodies on the go"
const bgImage = "/img/bg/menu.webp"

const Menu = () => {
    const loc = useLocation()
    const category = loc.state ? loc.state.category : ""
    return (
        <>
            <Header title={pageTitle} description={pageDescription} bgImage={bgImage} />
            <MenuSection category={category} />
            <Hr />
            <PayDay />
        </>
    )
}

export default Menu
