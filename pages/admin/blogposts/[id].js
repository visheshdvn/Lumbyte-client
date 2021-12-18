import React from "react";
import axios from "axios";

const Blogpost = () => {
  return <div>that post</div>;
};

export async function getServerSideProps(context) {
  // const { req } = context;
  // const session = await getSession({ req });

  let res = await axios.get("/blogpost/title")
  // if (session) {
  //   return {
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: {
    //   countBlogposts: await blogposts.count(),
    },
  };
}

export default Blogpost;
