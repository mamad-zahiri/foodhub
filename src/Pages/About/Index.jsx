import { Hr, Header } from "../../Components/html"
import Welcome from "./Welcome"
import Achievements from "./Achievements"
import DreamCreators from "./DreamCreators"

const pageTitle = "about us"
const pageDescription = "Discover the story behind our online fast food restaurant and our passion for delivering delicious meals   "
const bgImage = "/img/bg/about-us.webp"

const About = () => {
    return (
        <>
            <Header title={pageTitle} description={pageDescription} bgImage={bgImage} />
            <Welcome />
            <Hr />
            <Achievements />
            <Hr />
            <DreamCreators />
        </>
    )
}

export default About
