import { useSelector } from 'react-redux';
import { testSelector } from "../../store/reducers/aeroapi";
import FlightList from "./Flightlist";

export default function Flight() {
  const { flightlist, searchident } = useSelector(testSelector);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {searchident.length > 0 ? (
          <>
            {flightlist.flights?.filter((content) =>
              content.ident.match(new RegExp(searchident, "i"))
            ).map((content, idx) => (
              <FlightList key={idx} data={content}/>
            ))}
          </>
        ) : (
          <>
            {flightlist.flights?.map((content, idx) => (
              <FlightList key={idx} data={content}/>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}