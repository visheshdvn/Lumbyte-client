import { PrismaClient } from "@prisma/client";

const Redirect = () => {
  return <div>Redirecting...</div>;
};

export default Redirect;

export async function getServerSideProps({ res, params }) {
  const prisma = new PrismaClient();
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
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: `/story/${blogpost.author.username}/${slug}`,
      permanent: false,
    },
  };
}
