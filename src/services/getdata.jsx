import axios from "axios";

const headersList = {
  Accept: "application/json; charset=UTF-8",
  "x-apikey": process.env.REACT_APP_API_KEY,
};

export const getFlightlist = async () => {
  try {
    const resurl = `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_URL}/flights/search?query=-latlong+%2240.4772+-79.7624+45.0153+-71.7517%22&max_pages=1`;
    const reqOptions = {
      url: resurl,
      method: "GET",
      headers: headersList,
      withCredentials: false,
    };
    const res = await axios.request(reqOptions);
    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};
