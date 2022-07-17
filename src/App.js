import Header from "./component/Header"
import MainContent from "./component/MainContent"
import Footer from "./component/Footer";

export default function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}