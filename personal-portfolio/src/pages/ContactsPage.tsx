import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Navbar />
                <Contacts />
            </div>
            <Footer />
        </div>
    );
}

export default ContactsPage;
