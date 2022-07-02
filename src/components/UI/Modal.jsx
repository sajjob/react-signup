import "./Modal.scss";
import { AiFillCloseSquare } from "react-icons/ai";
import { useContext } from "react";

import RegisterContext from "../../context/registerContext";

const Modal = ({ children }) => {
  const { showModal, cancelModal } = useContext(RegisterContext);

  const showHideClassName = showModal
    ? "modal-me display-block-me"
    : "modal-me display-none-me";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-me">
        {children}
        <button className="close-btn-me" type="button" onClick={cancelModal}>
          <AiFillCloseSquare className="close-me" />
        </button>
      </section>
    </div>
  );
};

export default Modal;
