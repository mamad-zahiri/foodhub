import { Hr, Header } from "../../Components/html"
import ContactForm from "./Contact"
import GoogleMap from "./GoogleMap"

const pageTitle = "contact"
const pageDescription =
    "Contact us for any inquiries, feedback, or requests. Our team is here to assist you and provide excellent customer support"
const bgImage = "/img/bg/contact.jpg"

const Contact = () => {
    return (
        <>
            <Header title={pageTitle} description={pageDescription} bgImage={bgImage} />
            <ContactForm />
            <hr className="border-[#111] mt-2" />
            <GoogleMap />
        </>
    )
}

export default Contact
