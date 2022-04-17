import React, { useState, useEffect } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// components
import SignInForm from "../../components/elements/forms/signIn";
import Layout from "../../components/layouts/auth/signInRegister";
// utilities
import NoIndex from "../../utils/headTags/admin/noIndex";

const Login = ({ providers }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      Router.replace("/");
    }
  }, [status, session]);

  const [loginFormData, setLoginFormData] = useState({
    login: "",
    password: "",
  });

  function updateFormData(e) {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  }

  async function signInHandler(e) {
    e.preventDefault();
    const res = await signIn(providers.credentials.id, {
      redirect: false,
      ...loginFormData,
    });

    if (res.error) {
      toast.error("Trouble logging in. Please check your credentials.");
      return;
    } else {
      Router.replace("/");
    }
  }

  return (
    <>
      <NoIndex />
      {/* body */}
      <Layout
        bannerAlt="Your ideas matters. - LumBytes"
        bannerURL="https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
      >
        <div className="w-full max-w-xs">
          <h1 className="font-primary mb-8 text-center text-4xl font-bold">
            LumBytes
          </h1>
          <h2 className="font-primary mb-8 text-center text-base font-bold">
            Sign In
          </h2>

          <SignInForm
            onSubmitHandler={signInHandler}
            updateFormData={updateFormData}
            formData={loginFormData}
          />

          <h3 className="line-across relative z-10 mx-auto mb-5 text-center">
            <span className="font-primary bg-white px-2 text-sm font-bold">
              OR
            </span>
          </h3>

          <Link href={"/auth/register"} passHref>
            <a>
              <p className="font-primary flex h-10 w-full transform items-center justify-center rounded-sm border border-black text-sm font-bold text-black transition-all duration-700 hover:bg-black hover:text-white">
                Create an account
              </p>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const { req } = context;
  // const session = await getSession({ req });

  // if (session) {
  //   return {
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: {
      providers: await getProviders(),
    },
  };
}
