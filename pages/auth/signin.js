import React, { useState, useEffect } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
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

  const [formdata, updateFormData] = useState({
    login: "",
    password: "",
  });

  function updateformData(e) {
    updateFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    const res = await signIn(providers.credentials.id, {
      redirect: false,
      ...formdata,
    });

    if (res.error) {
      toast.error("Trouble logging in. Please check your credentials.");
      return;
    }

    Router.replace("/");
  }

  return (
    <>
      <NoIndex />
      <div className="grid h-screen grid-cols-12 gap-0">
        <div className="relative col-span-8">
          <Image
            src="https://lumbytes-general.s3.eu-west-1.amazonaws.com/Frame+35.jpg"
            alt="Your ideas matters. - LumBytes"
            layout="fill"
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <div className="w-full max-w-xs">
            <h1 className="font-primary mb-8 text-center text-4xl font-bold">
              LumBytes
            </h1>
            <h2 className="font-primary mb-8 text-center text-base font-bold">
              Sign In
            </h2>
            <form onSubmit={submitHandler} className="mb-8">
              <div className="login-input-group-email">
                <input
                  id="username_field"
                  type="text"
                  name="login"
                  autoCorrect="false"
                  onChange={(e) => updateformData(e)}
                  required
                />
                <label htmlFor="username_field" className="label-name-email">
                  <span className="content-name-email">Email</span>
                </label>
              </div>

              <div className="login-input-group-pass">
                <input
                  id="login_main"
                  type="password"
                  name="password"
                  autoCorrect="false"
                  onChange={(e) => updateformData(e)}
                  required
                />
                <label htmlFor="password_field" className="label-name-pass">
                  <span className="content-name-pass">Password</span>
                </label>
              </div>
              <input
                type={"submit"}
                className="font-primary h-10 w-full cursor-pointer rounded-sm bg-black text-sm font-bold text-white hover:brightness-110 focus:outline-none"
                value="Next"
              />
            </form>

            <h3 className="line-before relative mx-auto mb-5 text-center">
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
