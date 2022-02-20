export function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

// console.log(process.env.PORT);

export function getValidImageURL(url) {
  if (isValidURL(url)) {
    return url;
  } else {
    let nurl;
    if (process.env.NODE_ENV == "development") {
      nurl = `http://localhost:3000${url}`;
    } else {
      nurl = `https://lumbytes.com${url}`;
    }
    return nurl;
  }
}
