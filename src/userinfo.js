export default function Userinfo() {
    function userMenu() {
        console.log("user menu")
    }

    function notify(e) {
        console.log("notify")
    }

    return (<div className="flex flex-row items-center ">
            <div className="flex  items-center ">
                <div className="text-white mr-5">
                    <button onClick={userMenu}>
                        <img
                            src="https://yt3.ggpht.com/yti/AHyvSCD_LVpx-2GgBv0KEkhecNGGIkuvERnw0XOBTA=s88-c-k-c0x00ffffff-no-rj-mo"
                            className="rounded-full h-7 w-7 ">
                        </img>
                    </button>
                </div>

                <div className="bg-button" onClick={notify}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="h-7 w-7 "
                         style={{'background-color': '#131010'}}>
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
    )
}


