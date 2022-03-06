import axios from "./axios";
import { toast } from "react-toastify";

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
  } catch (err) {
    err.response.data.errors.map((error) => {
      toast.error(error.msg);
    });
  }
}
