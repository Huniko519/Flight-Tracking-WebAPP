import { SearchIcon } from '@heroicons/react/solid';
import { useNavigate, useLocation, Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setSearchident } from "../../store/reducers/aeroapi";

export default function Navbar() {
	const [searchText, setSearchText] = useState("");
  const searchident = useDebounce(searchText, 500);
  const dispatch = useDispatch();
  let location = useLocation();
	const navigate = useNavigate();

	const onChangeSearchText = (e) => {
		setSearchText(e.target.value);
	};
	
	useEffect(() => {
		if( location.pathname !== '/' ){
			navigate('/');
		}
    dispatch(setSearchident(searchident));
  }, [searchident]);
	
	return (
		<div className="py-5 px-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
			<Link to={'/'} className="text-lg leading-6 font-medium text-gray-900">Flight Tracking APP</Link>
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
							className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:hidden border-gray-300"
							placeholder="Search"
							value={searchText}
							onChange={onChangeSearchText}
						/>
						<input
							type="text"
							className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded pl-10 sm:block sm:text-sm border-gray-300"
							placeholder="Search"
							value={searchText}
							onChange={onChangeSearchText}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}