import React, { useState } from "react";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
  useSession,
} from "next-auth/react";
// utilities
import NoIndex from "../../utils/metaTags/admin/noIndex";

const Login = ({ providers, csrfToken }) => {
  const { data: session, status } = useSession();
  console.log(csrfToken);
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

  async function logproviders() {
    console.log(providers);
    console.log(session);
  }

  async function submitHandler(e) {
    e.preventDefault();
    // console.log(providers);
    const res = await signIn(providers.credentials.id, {
      redirect: false,
      ...formdata,
    });

    console.log(res);
    console.log(session);
    console.log("hereere");
  }

  return (
    <>
      <NoIndex />
      <div>
        <button onClick={logproviders}>providers</button>
        <form>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div>
            <label htmlFor="username_field">Enter Email:</label>
            <input
              id="username_field"
              type="text"
              name="login"
              autoCorrect="false"
              className="border-2 border-black"
              onChange={(e) => updateformData(e)}
            />
          </div>
          <div>
            <label htmlFor="password_field">Enter Password:</label>
            <input
              id="login_main"
              type="password"
              name="password"
              autoCorrect="false"
              className="border-2 border-black"
              onChange={(e) => updateformData(e)}
            />
          </div>
          <input
            type="button"
            className="rounded border border-purple-800 px-3 py-1 hover:bg-purple-800 hover:text-white focus:outline-none"
            onClick={(e) => submitHandler(e)}
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  // if (session) {
  //   return {
  //     redirect: { destination: "/" },
  //   };
  // }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}
