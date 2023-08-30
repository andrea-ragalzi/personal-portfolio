import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutMePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Navbar />
                <Bio />
            </div>
            <Footer />
        </div>
    );
}

export default AboutMePage;