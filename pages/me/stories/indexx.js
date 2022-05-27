import React from "react";
import { useSession, getSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// custom components
import FormattedDate from "../../../components/micro/formattedDate";
import AdminHomeLayout from "../../../components/layouts/adminHome";
// utils
import { HeadBlogposts } from "../../../utils/headTags/admin/meta";
import HeadStories from "../../../components/headTags/public/me/stories";
import prisma from "../../../utils/prisma";

const Stories = ({ blogposts }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading</p>;
  }

  return (
    <>
      {/* head */}
      <HeadStories title="My Stories" />

      {/* body */}
      <AdminHomeLayout
        title="Blogpost"
        count={blogposts.length}
        addNewHref="/me/stories/create"
      >
        {/* all blogpost grid */}
        <div className="pb-113 mt-5">
          <table className="font-primary w-full table-auto border">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-medium text-gray-800">
                <td className="opacity-0">S</td>
                {/* <th>S.No</th> */}
                <th className="py-4">Slug</th>
                <th rowSpan={2}>Title</th>
                <th>Featured</th>
                <th>Top Pick</th>
                <th>Date</th>
                <th>Status</th>
                <th>Controls</th>
                <th className="opacity-0">controls</th>
              </tr>
            </thead>
            <tbody>
              {blogposts.map((data) => (
                <TableContents data={data} key={data.id} />
              ))}
            </tbody>
          </table>
        </div>
      </AdminHomeLayout>
    </>
  );
};

function TableContents({ data }) {
  const { id, slug, title, featured, topPick, published, created_at, n } = data;

  return (
    <Link passHref href={`/me/stories/${id}`}>
      {/* <a> */}
      <tr
        className="font-primary cursor-pointer border-b bg-white text-xs font-medium text-gray-800"
        key={data.id}
      >
        <td className="opacity-0">S</td>
        {/* <td className="py-4">{n}</td> */}
        <td className="py-4">{decodeURIComponent(slug)}</td>
        <td className="line-clamp-1 pt-4">{title}</td>
        <td
          className={`capitalize ${
            data.featured ? "text-green-600" : "text-red-600"
          }`}
        >
          {featured.toString()}
        </td>
        <td
          className={` capitalize ${
            topPick ? "text-green-600" : "text-red-600"
          }`}
        >
          {topPick.toString()}
        </td>
        <td>
          <FormattedDate date={created_at} />
        </td>
        <td className={published ? "text-green-600" : "text-red-600"}>
          <div className="flex">
            <h5
              className={`border px-2 py-1 ${
                published
                  ? "border-green-600 bg-green-600 bg-opacity-5"
                  : "border-red-600 bg-red-600 bg-opacity-5"
              }`}
            >
              {published ? "Published" : "UnPublished"}
            </h5>
          </div>
        </td>
        <td className="opacity-0">controls</td>
      </tr>
      {/* </a> */}
    </Link>
  );
}

Stories.auth = {
  roles: ["CREATOR"],
};

export default Stories;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: true,
      },
    };
  }

  const { blogposts } = prisma;
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

  const data = await blogposts.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      featured: true,
      topPick: true,
      date: true,
      published: true,
      author: true,
      updated_at: true,
      created_at: true,
      n: true,
    },
    orderBy: {
      n: "desc",
    },
    where: {
      authorId: session.user.id,
    },
  });

  await prisma.$disconnect();
  let json = JSON.stringify(data);
  json = JSON.parse(json);

  return {
    props: { blogposts: json },
  };
}
