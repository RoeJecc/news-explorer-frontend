import { NavLink } from "react-router-dom";
import FormValidator from "../../utils/formValidator";
import { useEffect } from "react";

function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  buttonText,
  children,
  onSubmit,
}) {
  

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__container">
        <form
          name={`${name}`}
          onSubmit={onSubmit}
          className={`modal__profile modal__${name}`}
          noValidate
        >
          <h3 className="modal__title">{title}</h3>
          {children}      
          <button
            className="modal__close-button modal__close-button_profile"
            type="reset"
            name="close"
            onClick={onClose}
          />
          <p className="modal__text">
            or{" "}
            <NavLink to="/" className="modal__signup-link">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
