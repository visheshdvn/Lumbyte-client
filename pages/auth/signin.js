import React, { useState, useEffect } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
// components
import SignInForm from "../../components/elements/forms/signIn";
// utilities
import NoIndex from "../../utils/headTags/admin/noIndex";
import Image from "next/image";

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
      <div className="grid h-screen grid-cols-12 gap-0">
        <div className="relative hidden md:col-span-6 md:block lg:col-span-7 xl:col-span-8">
          <Image
            src="https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
            alt="Your ideas matters. - LumBytes"
            layout="fill"
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-12 flex items-center justify-center bg-white px-2 text-black md:col-span-6 lg:col-span-5 xl:col-span-4">
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
                <p className="font-primary flex h-10 w-full transform items-center justify-center rounded-sm border border-black text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white">
                  Create an account
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
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
