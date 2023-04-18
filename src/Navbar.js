import "./App.css";
import sidebar from "./Sidebar";
import {useState} from "react";

export function Navbar(props) {
    return (
        <div className="w-full top-0 z-0 fixed">
            <div className="w-full block">
                <div className="bg-base">
                    <div className="h-14 px-4 flex flex-row items-center justify-between">
                        <div className="bg-button">
                            <button onClick={props.toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="40" width="40"
                                     style={{"background-color": "#131010"}}>
                                    <g transform="matrix(0.9,0,0,0.9,0.7000000000000002,0.7000000000000002)">
                                        <g>
                                            <line x1="13.5" y1="2" x2="0.5" y2="2" fill="none" stroke="#e6e5e5"
                                                  stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="13.5" y1="7" x2="0.5" y2="7" fill="none" stroke="#e6e5e5"
                                                  stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="13.5" y1="12" x2="0.5" y2="12" fill="none" stroke="#e6e5e5"
                                                  stroke-linecap="round" stroke-linejoin="round"></line>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className="masthead h-10">
                            <form className="items-center bg-button flex-1">
                                <label htmlFor="simple-search" className="sr-only bg-button">Search</label>
                                <div className="relative w-full bg-base">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-8 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                           className="bg-button text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Search" required/>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="mr-2">
                                123123
                            </div>
                            <div className="bg-button ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="24" width="24"
                                     style={{'background-color': '#131010', padding: 2}}>
                                    <g transform="matrix(0.9,0,0,0.9,0.7000000000000002,0.6994743758102331)">
                                        <g>
                                            <path
                                                d="M7,.5a4.29,4.29,0,0,1,4.29,4.29c0,4.77,1.74,5.71,2.21,5.71H.5c.48,0,2.21-.95,2.21-5.71A4.29,4.29,0,0,1,7,.5Z"
                                                fill="none" stroke="#f4f4f4" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M5.5,12.33a1.55,1.55,0,0,0,3,0" fill="none" stroke="#f4f4f4"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
