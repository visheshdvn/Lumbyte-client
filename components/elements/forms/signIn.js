import React from "react";

const SignIn = ({ onSubmitHandler, updateFormData, formData }) => {
  return (
    <form onSubmit={onSubmitHandler} className="mb-8">
      <div className="login-input-group-email">
        <input
          id="username_field"
          type="text"
          name="login"
          autoCorrect="false"
          onChange={updateFormData}
          value={formData.login}
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
          onChange={updateFormData}
          value={formData.password}
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
  );
};

export default SignIn;
