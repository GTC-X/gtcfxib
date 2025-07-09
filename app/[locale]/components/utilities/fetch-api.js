import qs from "qs";
import { getStrapiURL } from "./api-helper";
import axios from "axios";

export async function fetchAPI(path, urlParamsObject, options) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // Disable caching
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    // const response = await fetch(requestUrl, mergedOptions);
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response?.json();
    console.log({data})
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
