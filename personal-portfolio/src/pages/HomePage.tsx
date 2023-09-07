import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-full xl:w-3/4">
                <Navbar />
                <Banner />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;