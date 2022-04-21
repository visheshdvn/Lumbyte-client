import axios from "../../../lib/axios";

export async function fetchMetaData(url) {
  const { data } = await axios.post(`${process.env.HOSTNAME}/fetchMetaData`, {
    url,
  });
  return data;
}

export async function KeyPressEventHandler(e) {
  const data = await fetchMetaData(e.target.value);
  return data;
}

export async function PasteEventHandler(e, link) {
  console.log("pasted", link);
  // const data = await fetchMetaData(e.target.value);
  // return data;
}
