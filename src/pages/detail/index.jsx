import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/aeroapi";
import { useParams } from "react-router-dom";
import { getAirport } from "../../services/getdata";

export default function Detail() {
  const { ident } = useParams();
  const { flightlist } = useSelector(testSelector);

  const getAirportdata = (airport_code, airport_info_url) => {
    if (airport_info_url === null || airport_code === null) {
      return "No information";
    }
    if (airport_code !== null) {
      getAirport(airport_code)
        .then(function (response) {
          const result = response.name + response.type;
          return result;
        })
        .catch(function () {
          return "No information";
        });
    }
  };

  return (
    <>
      {flightlist.flights
        ?.filter((content) => content.ident.match(ident))
        .map((content, idx) => (
          <div className="border-t border-gray-200" key={idx}>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Ident</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.ident}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Aircraft Type
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.aircraft_type
                    ? content.aircraft_type
                    : "No Information"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Last Postion
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Latitude :{" "}
                  {content.last_position.latitude
                    ? content.last_position.latitude
                    : "No Information"}
                  , Longitude :{" "}
                  {content.last_position.longitude
                    ? content.last_position.longitude
                    : "No Information"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Departure time
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.actual_off ? content.actual_off : "No Information"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Arrival time
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.actual_on ? content.actual_on : "No Information"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Departure predicted time
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.predicted_off
                    ? content.predicted_off
                    : "No Information"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Arrival predicted time
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {content.predicted_on
                    ? content.predicted_on
                    : "No Information"}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Origin airport
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {getAirportdata(
                    content.origin.code,
                    content.origin.airport_info_url
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Destination airport
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {getAirportdata(
                    content.destination?.code,
                    content.destination?.airport_info_url
                  )}
                </dd>
              </div>
            </dl>
          </div>
        ))}
    </>
  );
}
