import { toast } from "react-toastify";

const EXPRESS_VALIDATOR_ERRORS = 422;

export default function (e, theme = "light") {
  // validation errors
  if (e.response?.status === EXPRESS_VALIDATOR_ERRORS) {
    e.response.data.errors.map((err) => toast.error(err.msg, { theme }));
  }
  // unauthorization errors
  else if (e.response?.status === 401) {
    toast.error("Unauthorized", { theme });
  }
  // all other errors
  else {
    toast.error("Error", { theme });
  }
}
