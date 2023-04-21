import "./App.css";
import Userinfo from "./userinfo";
import {Searchbar} from "./Searchbar";
import Logo from "./Logo";

export function Navbar(props) {
    return (
        <div className="w-full top-0 z-0 fixed h-14">
            <div className="w-full block">
                <div className="dark:bg-base bg-white">
                    <div className="px-4 flex flex-row items-center justify-between">
                        <Logo/>
                        <Searchbar/>
                        <Userinfo/>
                    </div>
                </div>
            </div>
        </div>
    )
}
