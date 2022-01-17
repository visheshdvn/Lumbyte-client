import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Auth = ({ children }) => {
  //   const [session, loading] = useSession();
  const { data: session, status } = useSession();
  const hasUser = !!session?.user;
  const router = useRouter();
  useEffect(() => {
    if (!loading && !hasUser) {
      router.push("/login");
    }
  }, [loading, hasUser]);
  if (loading || !hasUser) {
    return <div>Waiting for session...</div>;
  }
  return children;
};

export default Auth;
