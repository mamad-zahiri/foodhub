import { Header } from "../../Components/html"
import CustomerReview from "../../Components/CustomerReview"
import Questions from "./Questions"
import SpecialOffer from "../../Components/SpecialOffer"

const pageTitle = "faq"
const pageDescription =
    "Discover answers to common questions about our menu, ordering process, and delivery options at our fast food restauran"
const bgImage = "/img/bg/faq.jpg"

const FAQ = () => {
    return (
        <>
            <Header title={pageTitle} description={pageDescription} bgImage={bgImage} />
            <Questions />
            <SpecialOffer />
            <CustomerReview />
        </>
    )
}

export default FAQ
