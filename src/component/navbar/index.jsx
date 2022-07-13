// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png"
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'

export default function Navbar() {
    return (
        <div className="py-5 px-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Flight Tracking APP</h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
                <label htmlFor="mobile-search-candidate" className="sr-only">
                    Search
                </label>
                <label htmlFor="desktop-search-candidate" className="sr-only">
                    Search
                </label>
                <div className="flex rounded-md shadow-sm">
                    <div className="relative flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            name="mobile-search-candidate"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:hidden border-gray-300"
                            placeholder="Search"
                        />
                        <input
                            type="text"
                            name="desktop-search-candidate"
                            className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded pl-10 sm:block sm:text-sm border-gray-300"
                            placeholder="Search Flight "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}