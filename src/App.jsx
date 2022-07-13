import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import { getFlightlist } from "./services/getdata";
import { useQuery } from "react-query";

export default function App() {
  const { data } = useQuery("filghtlist", () => getFlightlist());
  console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
