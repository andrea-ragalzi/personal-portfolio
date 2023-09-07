import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactsPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-full xl:w-3/4">
                <Navbar />
                <Contacts />
            </div>
            <Footer />
        </div>
    );
}

export default ContactsPage;
