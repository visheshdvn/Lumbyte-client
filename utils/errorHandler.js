import { toast } from "react-toastify";

const EXPRESS_VALIDATOR_ERRORS = 422;

export default function (e, theme = "light") {
  console.log(e.response);
  if (e.response?.status === EXPRESS_VALIDATOR_ERRORS) {
    e.response.data.errors.map((err) => toast.error(err.msg, { theme }));
  } else if (e.response?.status === 401) {
    toast.error("Unauthorized", { theme });
  } else {
    toast.error("Error", { theme });
  }
}
