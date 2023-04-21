export default function Logo() {
    return (
        <div className="bg-button">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="w-6 h-6"
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
    )
}
