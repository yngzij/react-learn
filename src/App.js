import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import {Navbar} from "./Navbar";


export default function App() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Hero/>
            <Footer/>
        </div>
    )
}