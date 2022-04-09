import React from "react";

const index = () => {
  return <div>Loading...</div>;
};

export async function getServerSideProps(context) {
  const { username } = context.params;

  return {
    redirect: {
      destination: `/${username}`,
      permanent: false,
    },
    props: {},
  };
}

export default index;
