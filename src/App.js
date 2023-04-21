import {Navbar} from "./Navbar";

import Hero from "./Hero";
import Sidebar from "./Sidebar";

import {useState} from "react";


export default function App() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    // TODO - 糟糕的代码，需要重构
    document.body.classList.add('dark:bg-content');
    document.body.classList.add('bg-white');

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    }

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar}/>
            {isSidebarVisible && <Sidebar/>}
            {<Hero/>}
        </div>
    )
}