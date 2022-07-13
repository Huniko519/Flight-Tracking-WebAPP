import axios from "axios";

export const getFlightlist = async () => {
  try {
    const resurl = process.env.REACT_APP_API_URL + `/flights/search?query=-latlong+%2240.4772+-79.7624+45.0153+-71.7517%22&max_pages=1`;
    const headersList = {
      "Accept": "application/json; charset=UTF-8",
      "x-apikey": "GZMdJn2SkQewUGtZK1rSY41dGlleazUg" 
     }
    const reqOptions = {
      url: resurl,
      method: "GET",
      headers: headersList,
      withCredentials: false,
    }
    const res = await axios.request(reqOptions).then(function (response) {
      console.log(response.data);
    })
    
    return Promise.resolve(res.data);
  } catch (e) {
    return Promise.reject(e);
  }
};
