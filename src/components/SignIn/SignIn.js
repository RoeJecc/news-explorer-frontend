import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";
import FormValidator from "../../utils/formValidator";

function SignIn({
  isOpen,
  onClose,
  onLoginSubmit,
  onSignInClick,
  hasError,
  setCurrentUser,
  currentUser,
  onSignUpClick
}) {
  const { values, handleChange, errors, isValid } = FormValidator();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function resetInfo() {
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLoginSubmit(values.email, values.password);
    resetInfo();
  }

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="signin__container">
        <label className="signin__label">Email</label>
        <input
          type="email"
          className="signin__input"
          id="email-login"
          placeholder="Enter email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="on"
          required
        ></input>
        <p className="modal__error">{errors.email || ""}</p>
        <label className="signin__label signin__label-padded">Password</label>
        <input
          type="password"
          className="signin__input"
          id="password-login"
          placeholder="Enter password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          minLength={4}
          maxLength={20}
          autoComplete="on"
          required
        ></input>
        <p className="modal__error">{errors.password || ""}</p>
        <button
          className={`modal__form-submit ${
            isValid ? "modal__form-submit_active" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
          Sign in
        </button>
        <p className="signin__text">
          or{" "}
          <span to="/" className="signin__signup-link" onClick={onSignUpClick} >
            Sign up
          </span>
        </p>
      </div>
    </PopupWithForm>
  );
}

export default SignIn;
