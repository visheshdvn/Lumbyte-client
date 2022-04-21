import axios from "../../../lib/axios";
import { isValidURL, ValidateIPaddress } from "../../../utils/checkValidURL";

export async function fetchMetaData(url) {
  const { data } = await axios.post(`/fetchMetaData/test`, {
    url,
  });
  return data;
}

export function markInvalidInput(msg) {
  return {
    success: 0,
    msg,
  };
}

// block if
// 1. url is not valid
// 2. url is an IP address
// 3. url is a localhost
//
export async function KeyPressEventHandler(e) {
  const validURL = isValidURL(e.target.value);

  if (validURL) {
    const u = new URL(e.target.value);
    const validIPDomain = ValidateIPaddress(u.hostname);
    const httpProtocol = u.protocol === "http:";
    const localDomain =
      u.hostname === "localhost" || u.hostname === "127.0.0.1";

    if (localDomain) {
      return markInvalidInput("Local domain is not allowed.");
    }
    if (validIPDomain || httpProtocol) {
      return markInvalidInput("Insecure URL");
    }
  } else {
    return markInvalidInput("Invalid URL");
  }

  const data = await fetchMetaData(e.target.value);
  return data;
}

export async function PasteEventHandler(e, link) {
  // console.log("pasted", link);
  // const data = await fetchMetaData(e.target.value);
  // return data;
}
