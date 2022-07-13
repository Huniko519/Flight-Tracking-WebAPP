import { Link } from "react-router-dom";
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'

export default function FlightList({data}) {
  return (
    <Link to={'/detail/'+data.ident} className="block hover:bg-gray-50">
        <div className="w-full text-center my-1">
          <p className="px-4 py-2 text-xl leading-5 font-semibold w-100  bg-green-100 text-green-800">{data.ident}</p>
        </div>
    </Link>
  );
}