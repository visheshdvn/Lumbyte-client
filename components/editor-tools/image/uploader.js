import axios from "axios";

const baseUrl = process.env.NODE_ENV
  ? "http://localhost:3000/api"
  : "https://lumbytes.com/api";

export async function uploadFile(file) {
  try {
    const urlObj = await axios.post(
      `${baseUrl}/media/getSignedUrl`,
      {
        contentType: file.type,
        filename: file.name,
      }
    );
    const {
      data: { url, filename, filetype, fileurl },
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
