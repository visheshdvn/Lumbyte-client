import axios from "./axios";
import { toast } from "react-toastify";

// blogposts
export async function publishBlogpost(
  postId,
  state,
  setState,
  theme = "light"
) {
  try {
    const res = await axios.put(`blogposts/publish/${postId}`);
    setState({ ...state, published: true });
    toast.success("Blogpost published successfully", { theme });
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg, { theme });
    });
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
    toast.success("Blogpost unpublished successfully", { theme });
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg, { theme });
    });
  }
}

// tags
export async function publishTag(tagId, state, setState, theme = "light") {
  try {
    const res = await axios.put(`tags/publish/${tagId}`);
    setState({ ...state, published: true });
    toast.success("Tag published successfully", { theme });
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg, { theme });
    });
  }
}

export async function unPublishTag(tagId, state, setState, theme = "light") {
  try {
    const res = await axios.put(`tags/unpublish/${tagId}`);
    setState({ ...state, published: false });
    toast.success("Tag unpublished successfully", { theme });
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg, { theme });
    });
  }
}
