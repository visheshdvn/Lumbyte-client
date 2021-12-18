import axios from "axios";

// const baseURL =
//   process.env == "development"
//     ? "http://localhost:3000/api"
//     : "https://lumbytes.com/api";

const instance = axios.create({
  baseURL,
});

// instance.interceptors.request.use(
//   (conf) => {
//     console.log(conf);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

export default instance;
