import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Navbar />
                <Banner />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;