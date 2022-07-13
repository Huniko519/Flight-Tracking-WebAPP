import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import { useEffect } from "react";
import { getFlightlist } from "./services/getdata";
import { useDispatch } from "react-redux";
import { setFlightlists } from "./store/reducers/aeroapi";
import Navbar from "./components/Navbar";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFlightlist()
      .then(function (response) {
        console.log(response);
        return dispatch(setFlightlists(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="container overflow-hidden mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:ident" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
