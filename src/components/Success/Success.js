function Success({ onClose, isOpen, onSignInClick }) {
  function handleSuccessClick(e) {
    if (e.target.classList.contains("modal_open")) {
      onClose();
    }
  }
  return (
    <div
      onClick={handleSuccessClick}
      className={`modal modal_type_success ${isOpen ? "modal_open" : ""}`}
    >
      <div className="modal__success-container">
        <button
          className="modal__close-button"
          type="reset"
          name="close"
          onClick={onClose}
        />
        <h2 className="modal__title">Registration successfully complete!</h2>
        <p className="modal__success-text">
          <span to="/" className="signup__signin-link" onClick={onSignInClick}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Success;
