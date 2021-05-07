import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layout/Header";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Container />
            <Footer />
        </Router>
    );
}

export default App;
