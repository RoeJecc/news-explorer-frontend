import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormValidator from "../../utils/formValidator";


function SignUp({
  isOpen,
  onClose,
  onRegisterSubmit,
  onSignInClick,
  hasError,
  setCurrentUser,
  currentUser,
}) {
  const { values, handleChange, errors, isValid } = FormValidator();

  function handleSubmit(e) {
    e.preventDefault();
    onRegisterSubmit(values.email, values.password, values.name);
  }

  return (
    <PopupWithForm
      name="signup"
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="signup__container">
        <label className="signup__label">Email</label>
        <input
          type="email"
          className="signup__input"
          id="email-register"
          placeholder="Enter email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="on"
          required
        ></input>
        <p className="modal__error">{errors.email || ""}</p>
        <label className="signup__label signup__label-padded">Password</label>
        <input
          type="password"
          className="signup__input"
          id="password-register"
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
        <label className="signup__label signup__label-padded">Username</label>
        <input
          type="name"
          className="signup__input"
          id="name-register"
          placeholder="Enter username"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          autoComplete="on"
          required
        ></input>
        <p className="modal__error">{errors.name || ""}</p>
        <button
          className={`modal__form-submit ${
            isValid ? "modal__form-submit_active" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
          Sign in
        </button>
        <p className="signup__text">
          or{" "}
          <span to="/" className="signup__signin-link" onClick={onSignInClick}>
            Sign up
          </span>
        </p>
      </div>
    </PopupWithForm>
  );
}

export default SignUp;
