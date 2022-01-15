import React from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";

const index = () => {
  return (
    <div>
      <Link href="/admin/panel" passHref={true}>
        <a>Go to admin panel</a>
      </Link>
    </div>
  );
};
export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  
  return {
    redirect: {
      destination: "/admin/blogposts",
      permanent: false,
    },
  };
}
