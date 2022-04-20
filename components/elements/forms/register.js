import React from "react";

const Register = ({ onSubmitHandler, updateFormData, formData }) => {
  return (
    <form onSubmit={onSubmitHandler} className="mb-8">
      <div className="sm:flex-row flex flex-col justify-between">
        {/* firstname */}
        <div className="register-input-group-firstname">
          <input
            id="firstname_field"
            type="text"
            name="firstname"
            autoCorrect="false"
            onChange={updateFormData}
            value={formData.firstname}
            required
          />
          <label htmlFor="firstname_field" className="label-name-firstname">
            <span className="content-name-firstname">First Name</span>
          </label>
        </div>
        {/* lastname */}
        <div className="register-input-group-lastname">
          <input
            id="lastname_field"
            type="text"
            name="lastname"
            autoCorrect="false"
            onChange={updateFormData}
            value={formData.lastname}
            placeholder=" "
          />
          <label htmlFor="lastname_field" className="label-name-lastname">
            <span className="content-name-lastname">Last Name</span>
          </label>
        </div>
      </div>

      <div className="register-input-group-username">
        <input
          id="username_field"
          type="text"
          name="username"
          autoCorrect="false"
          onChange={updateFormData}
          value={formData.username}
          required
        />
        <label htmlFor="username_field" className="label-name-username">
          <span className="content-name-username">Username</span>
        </label>
      </div>

      <div className="register-input-group-email">
        <input
          id="email_field"
          type="email"
          name="email"
          autoCorrect="false"
          onChange={updateFormData}
          value={formData.email}
          placeholder=" "
          required
        />
        <label htmlFor="email_field" className="label-name-email">
          <span className="content-name-email">Email</span>
        </label>
      </div>

      <div className="register-input-group-pass">
        <input
          id="pass_field"
          type="password"
          name="password"
          autoCorrect="false"
          onChange={updateFormData}
          value={formData.password}
          required
        />
        <label htmlFor="pass_field" className="label-name-pass">
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

export default Register;
