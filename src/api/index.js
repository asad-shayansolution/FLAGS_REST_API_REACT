import axios from "axios";
import { URL } from "../configs";
import { json } from "react-router-dom";

axios.defaults.baseURL = URL;

export async function fetchAllCountries() {
  try {
    return (await axios.get("/all")).data;
  } catch (error) {
    const { status, statusText } = error.response;
    throw json(
      {
        page: "home",
        message: error.message,
      },
      {
        status,
        statusText,
      }
    );
  }
}

export async function fetchCountryDetails({ params }) {
  try {
    return (await axios.get(`/name/${params.country}?fullText=true`)).data[0];
  } catch (error) {
    const { status, statusText } = error.response;
    throw json(
      {
        page: "details",
        message: error.message,
      },
      {
        status,
        statusText,
      }
    );
  }
}

export async function fetchCountryByCode(code) {
  try {
    return (await axios.get(`/alpha/${code}`)).data[0];
  } catch (error) {
    const { status, statusText } = error.response;
    throw json(
      {
        page: "details",
        message: error.message,
      },
      {
        status,
        statusText,
      }
    );
  }
}
