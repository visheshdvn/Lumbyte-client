import axios from "./axios";
import { toast } from "react-toastify";
// import { useTheme } from "next-themes";

// blogposts
export async function publishBlogpost(postId, state, setState) {
  try {
    const res = await axios.put(`blogposts/publish/${postId}`);
    setState({ ...state, published: true });
    toast.success("Blogpost published successfully");
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg);
    });
  }
}

export async function unPublishBlogpost(postId, state, setState) {
  try {
    const res = await axios.put(`blogposts/unpublish/${postId}`);
    console.log(res.data);
    setState({ ...state, published: false });
    toast.success("Blogpost unpublished successfully");
    console.log(theme);
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg);
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
      toast.error(error.msg);
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
      toast.error(error.msg);
    });
  }
}
