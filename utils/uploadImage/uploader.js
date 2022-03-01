import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://lumbytes.com/api";

async function uploadImage(file, usage = "banner") {
  try {
    let urlObj;
    if (usage === "banner") {
      urlObj = await axios.post(`${baseUrl}/media/getSignedUrl-banner`, {
        contentType: file.type,
        filename: file.name,
      });
    } else {
      urlObj = await axios.post(`${baseUrl}/media/getSignedUrl`, {
        contentType: file.type,
        filename: file.name,
      });
    }

    const {
      data: { url, filename, fileurl },
    } = urlObj;

    await axios.put(url, file, {
      headers: { "Content-Type": file.type },
    });

    await axios.post(`${baseUrl}/media/recordImage`, {
      url: fileurl,
      name: filename,
    });

    return {
      status: "OK",
      responseData: {
        url: fileurl,
      },
    };
  } catch (err) {
    return {
      status: "ERR",
      responseData: {},
    };
  }
}

export default uploadImage;
