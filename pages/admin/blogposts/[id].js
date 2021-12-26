import React from "react";
import axios from "axios";
import Sidebar from "../../../components/adminPanel/leftSideBar";
import Link from "next/link";

const Blogpost = () => {
  return (
    <div className="flex bg-whiteMain">
      <Sidebar />
    </div>
  );
};

export async function getServerSideProps(context) {
  // const { req } = context;
  // const session = await getSession({ req });

  // let res = await axios.get("/blogpost/title")
  // if (session) {
  //   return {
  // redirect: { destination: "/" },
  //   };
  // }

  return {
    props: {
      //   countBlogposts: await blogposts.count(),
    },
  };
}

export default Blogpost;
