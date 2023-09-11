import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import notFoundImg from "../assets/not_found.png";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex flex-col w-full xl:w-3/4">
                <Navbar />
                <div className="md:w-1/2 mx-auto xl:mt-20 text-center border-b-2 border-palette-400 dark:border-palette-800 pb-10">
                    <h2>Page not found</h2>
                    <img src={notFoundImg} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;