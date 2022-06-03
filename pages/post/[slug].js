import prisma from "../../lib/prisma";
import NoIndex from "../../components/headTags/noIndex";

const Redirect = () => {
  return (
    <>
      <NoIndex />
      <div>Redirecting...</div>;
    </>
  );
};

export default Redirect;

export async function getServerSideProps({ res, params }) {
  const { blogposts } = prisma;
  const { slug } = params;

  const blogpost = await blogposts.findUnique({
    where: { slug },
    select: {
      title: true,
      author: {
        select: {
          username: true,
        },
      },
    },
  });

  await prisma.$disconnect();

  if (!blogpost) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: `/story/${blogpost.author.username}/${slug}`,
      permanent: true,
    },
  };
}
