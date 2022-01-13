import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";

function SignIn({
  isOpen,
  onClose,
  onLoginSubmit,
  onSignInClick,
  hasError,
  setCurrentUser,
  currentUser,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function resetInfo() {
    setEmail("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLoginSubmit(email, password, username);
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
          value={email || ""}
          onChange={handleEmail}
          required
        ></input>
        <label className="signin__label">Password</label>
        <input
          type="password"
          className="signin__input"
          id="password-login"
          placeholder="Enter password"
          name="password"
          value={password || ""}
          onChange={handlePassword}
          required
        ></input>
        <label className="signin__label">Username</label>
        <input
          type="username"
          className="signin__input"
          id="username-login"
          placeholder="Enter Username"
          name="username"
          value={username || ""}
          onChange={handleUsername}
          required
        ></input>
      </div>
    </PopupWithForm>
  );
}

export default SignIn;
