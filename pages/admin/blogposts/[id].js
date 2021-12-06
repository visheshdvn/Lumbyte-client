import React from "react";

const Blogpost = () => {
  return <div>that post</div>;
};

export async function getServerSideProps(context) {
  // const { req } = context;
  // const session = await getSession({ req });

  let res = await fetch()
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
