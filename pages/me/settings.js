import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import Router from "next/router";
// components
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/elements/navbar/Navbar";
import NoIndex from "../../components/headTags/noIndex";
import prisma from "../../lib/prisma";
import axios from "../../lib/axios";
import errorHandler from "../../utils/errorHandler";

const settings = ({ data }) => {
  const { data: session, status } = useSession();
  const { theme } = useTheme();
  const initialValues = { ...data };
  const [thresholdData, setThresholdData] = useState({ ...data });
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.push("/auth/signin");
    }
  }, [session, status]);

  const [disabledControls, setDisabledControls] = useState({
    nameFields: true,
    username: true,
    about: true,
  });

  const updateData = (e) => {
    setThresholdData({
      ...thresholdData,
      [e.target.name]: e.target.value,
    });
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = async (payload) => {
    try {
      const { data, status } = await axios.patch("/account/update", {
        ...payload,
        id: session.user.id,
      });
      return data.success;
    } catch (error) {
      errorHandler(error, theme);
    }
  };

  return (
    <>
      <Head>
        <title>LumBytes | Settings</title>
      </Head>
      <NoIndex />

      {/* body */}
      <Navbar />
      <div className="horizontal-spacing container mx-auto pt-10">
        <div className="md:px-14 lg:px-24">
          <div className="grid grid-cols-4 gap-1">
            <div className="font-open-sans col-span-1 hidden xl:block">
              <h3 className="mb-5 text-2xl font-bold">Settings</h3>
              <ul className="text-lg font-semibold text-neutral-500 dark:text-zinc-50">
                <a href="#about">
                  <li>About</li>
                </a>
              </ul>
            </div>
            <div className="font-open-sans col-span-4 pb-40 xl:col-span-3">
              <div>
                <h1 id="about" className="mb-8 text-2xl font-bold">
                  About
                </h1>
                <div className="mb-10 flex flex-col sm:flex-row">
                  <div className="flex-1">
                    <ItemHead title={"Name"} />
                    <div className="flex">
                      <SettingsInput
                        value={thresholdData.firstname}
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        onChangeHandler={updateData}
                        disableCheck={disabledControls.nameFields}
                      />
                      <SettingsInput
                        value={thresholdData.lastname}
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        onChangeHandler={updateData}
                        disableCheck={disabledControls.nameFields}
                      />
                    </div>
                  </div>
                  <div>
                    {disabledControls.nameFields ? (
                      <EditButton
                        stateModifier={setDisabledControls}
                        state={disabledControls}
                        property="nameFields"
                      />
                    ) : (
                      <div className="flex">
                        <SaveButton
                          saveData={saveData}
                          payload={{
                            firstname: requestData.firstname,
                            lastname: requestData.lastname,
                          }}
                          stateHandler={setDisabledControls}
                          initialState={disabledControls}
                          property="nameFields"
                        />
                        <CancelButton
                          stateModifier={setDisabledControls}
                          state={disabledControls}
                          property="nameFields"
                          callback={() => {
                            delete requestData.firstname;
                            delete requestData.lastname;
                            setThresholdData({
                              ...thresholdData,
                              firstname: initialValues.firstname,
                              lastname: initialValues.lastname,
                            });
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-10 flex flex-col sm:flex-row">
                  <div className="flex-1">
                    <ItemHead title={"Username"} />
                    <SettingsInput
                      value={thresholdData.username}
                      type="text"
                      name="username"
                      placeholder="username"
                      onChangeHandler={updateData}
                      disableCheck={disabledControls.username}
                    />
                  </div>
                  <div>
                    {disabledControls.username ? (
                      <EditButton
                        stateModifier={setDisabledControls}
                        state={disabledControls}
                        property={"username"}
                      />
                    ) : (
                      <div className="flex">
                        <SaveButton
                          saveData={saveData}
                          payload={{
                            username: requestData.username,
                          }}
                          stateHandler={setDisabledControls}
                          initialState={disabledControls}
                          property={"username"}
                        />
                        <CancelButton
                          stateModifier={setDisabledControls}
                          state={disabledControls}
                          property="username"
                          callback={() => {
                            delete requestData.username;
                            setThresholdData({
                              ...thresholdData,
                              username: initialValues.username,
                            });
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-10 flex flex-col sm:flex-row">
                  <div className="flex-1">
                    <ItemHead title={"About"} />
                    {disabledControls.about ? (
                      <div
                        style={{ maxWidth: "600px" }}
                        className="w-full border-b border-zinc-100 bg-transparent py-1 text-base outline-none dark:border-zinc-700 lg:w-full"
                      >
                        {thresholdData.about}
                      </div>
                    ) : (
                      <textarea
                        style={{ maxWidth: "600px" }}
                        value={thresholdData.about}
                        name="about"
                        className="h-20 w-full border-b border-zinc-700 bg-transparent pb-1 text-base outline-none dark:border-zinc-50 lg:w-full"
                        maxLength={200}
                        onChange={updateData}
                        disabled={disabledControls.about}
                        placeholder="Tell us about yourself"
                      />
                    )}
                  </div>
                  <div>
                    {disabledControls.about ? (
                      <EditButton
                        stateModifier={setDisabledControls}
                        state={disabledControls}
                        property={"about"}
                      />
                    ) : (
                      <div className="flex">
                        <SaveButton
                          saveData={saveData}
                          payload={{
                            about: requestData.about,
                          }}
                          stateHandler={setDisabledControls}
                          initialState={disabledControls}
                          property="about"
                        />
                        <CancelButton
                          stateModifier={setDisabledControls}
                          state={disabledControls}
                          property="about"
                          callback={() => {
                            delete requestData.about;
                            setThresholdData({
                              ...thresholdData,
                              about: initialValues.about,
                            });
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;

function ItemHead({ title }) {
  return <h2 className="text-xl font-bold">{title}</h2>;
}

function EditButton({ stateModifier, state, property }) {
  return (
    <button
      className="text mt-3 h-8 rounded-full border border-neutral-300 px-3 text-sm font-normal text-neutral-500 hover:border-neutral-500 md:mt-0 md:h-10 md:px-4 md:text-base"
      onClick={() => {
        stateModifier({
          ...state,
          [property]: false,
        });
      }}
    >
      Edit
    </button>
  );
}

function CancelButton({ stateModifier, state, property, callback }) {
  return (
    <button
      className="text mt-3 h-8 rounded-full border border-neutral-300 px-3 text-sm font-medium text-neutral-500 hover:border-neutral-500 md:mt-0 md:h-10 md:px-4 md:text-base"
      onClick={() => {
        stateModifier({
          ...state,
          [property]: true,
        });
        callback();
      }}
    >
      Cancel
    </button>
  );
}

function SaveButton({
  saveData,
  payload,
  stateHandler,
  initialState,
  property,
}) {
  return (
    <button
      className="text mr-3 mt-3 h-8 rounded-full border border-[#65A30D] px-3 text-sm font-medium text-green-600 md:mt-0 md:h-10 md:px-4 md:text-base"
      onClick={async () => {
        const success = await saveData(payload);
        if (!!success) {
          stateHandler({
            ...initialState,
            [property]: true,
          });
        }
      }}
    >
      Save
    </button>
  );
}

function SettingsInput({
  value,
  type,
  placeholder,
  onChangeHandler,
  disableCheck,
  name,
}) {
  return (
    <div style={{ maxWidth: "150px" }} className="mr-5 overflow-hidden">
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full transform border-b border-zinc-700 bg-transparent pb-1 text-base outline-none transition-all duration-300 disabled:border-zinc-100 dark:border-zinc-50 dark:disabled:border-zinc-700"
        onChange={onChangeHandler}
        disabled={disableCheck}
      />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const { user } = prisma;

  const user_data = await user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      firstname: true,
      lastname: true,
      username: true,
      dp: true,
      about: true,
    },
  });

  return {
    props: {
      data: user_data,
    },
  };
}
