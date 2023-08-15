import { Header } from "../../Components/html"
import ReservationForm from "./Form"
import Info from "./Info"

const pageTitle = "reservation"
const pageDescription = "Conveniently book your table online and enjoy quick, delicious meals from our virtual fast food joint"
const bgImage = "/img/bg/book-table.webp"

const Reservation = () => {
    return (
        <>
            <Header title={pageTitle} description={pageDescription} bgImage={bgImage} />
            <section className="flex flex-wrap items-start max-w-6xl mx-auto">
                <ReservationForm />
                <Info />
            </section>
        </>
    )
}

export default Reservation
