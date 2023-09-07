import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMePage = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex flex-col w-full xl:w-3/4">
                <Navbar />
                <Bio />
            </div>
            <Footer />
        </div>
    );
}

export default AboutMePage;