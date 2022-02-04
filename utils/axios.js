import axios from "axios";

const developmentInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 1000,
});

const productionInstance = axios.create({
  baseURL: "https://lumbytes.com/api/",
  timeout: 1000,
});

const exportedInstane =
  process.env.NODE_ENV === "development"
    ? developmentInstance
    : productionInstance;

export default exportedInstane;
