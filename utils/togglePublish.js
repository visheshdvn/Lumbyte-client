import axios from "../lib/axios";
import { toast } from "react-toastify";
import errorHandler from "./errorHandler";

// blogposts
export async function publishBlogpost(
  postId,
  state,
  setState,
  theme = "light",
  new_data
) {
  try {
    const res = await axios.put(`blogposts/publish/${postId}`);
    if (new_data) {
      setState({
        ...state,
        ...new_data?.blogpost,
        content: JSON.parse(new_data.blogpost.content),
        published: true,
      });
    } else {
      setState({
        ...state,
        published: true,
      });
    }
    toast.success("Published", { theme });
  } catch (err) {
    errorHandler(err, theme);
  }
}

export async function unPublishBlogpost(
  postId,
  state,
  setState,
  theme = "light"
) {
  try {
    const res = await axios.put(`blogposts/unpublish/${postId}`);
    setState({ ...state, published: false });
    toast.success("Unpublished", { theme });
  } catch (err) {
    errorHandler(err, theme);
  }
}

// tags
export async function publishTag(tagId, state, setState, theme = "light") {
  try {
    const res = await axios.put(`tags/publish/${tagId}`);
    setState({ ...state, published: true });
    toast.success("Published", { theme });
  } catch (err) {
    errorHandler(err, theme);
  }
}

export async function unPublishTag(tagId, state, setState, theme = "light") {
  try {
    const res = await axios.put(`tags/unpublish/${tagId}`);
    setState({ ...state, published: false });
    toast.success("Unpublished", { theme });
  } catch (err) {
    errorHandler(err, theme);
  }
}
