export function Searchbar() {
    return (
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
                           className="w-full bg-button text-white text-sm rounded-lg  pl-10 p-2.5 focus:outline-none  focus:ring-blue-600 focus:block"
                           placeholder="名称，屙呕，屙呕呕呕，欧俄饿欧俄饿" required/>
                </div>
            </form>
        </div>
    )
}
