import {Navbar} from "./Navbar";

import Hero from "./Hero";
import Sidebar from "./Sidebar";

import {useState} from "react";


export default function App() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    document.body.classList.add('bg-content');

    const toggleSidebar = () => {
        console.log(isSidebarVisible)
        setSidebarVisible(!isSidebarVisible);
    }

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar}/>
            {isSidebarVisible && <Sidebar/>}
            <Hero/>
        </div>
    )
}