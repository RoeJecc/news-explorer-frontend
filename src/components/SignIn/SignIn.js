import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignIn({ isOpen, onClose, onLoginSubmit, onSignInClick, hasError }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLoginSubmit();
  }

  return (
    <PopupWithForm
      name="signin"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default SignIn;
