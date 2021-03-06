import useFormValidator from "../../utils/useFormValidator";
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
      <button
            className="modal__close-button"
            type="reset"
            name="close"
            onClick={onClose}
          />
        <form
          name={`${name}`}
          onSubmit={onSubmit}
          className={`modal__form modal__${name}`}
          noValidate
        >
          <h3 className="modal__title">{title}</h3>
          {children}
          
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
