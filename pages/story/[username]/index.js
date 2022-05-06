import React from "react";
import NoIndex from "../../../components/headTags/noIndex";

const index = () => {
  return (
    <>
      <NoIndex />
      <div>Loading...</div>;
    </>
  );
};

export async function getServerSideProps(context) {
  const { username } = context.params;

  return {
    redirect: {
      destination: `/${username}`,
      permanent: true,
    },
    props: {},
  };
}

export default index;
