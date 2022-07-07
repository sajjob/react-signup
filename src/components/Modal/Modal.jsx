import "./Modal.scss";
import { AiFillCloseSquare } from "react-icons/ai";
import { useContext } from "react";

import signupContext from "../../context/signupContext";

const Modal = () => {
  const { showModal, cancelModal } = useContext(signupContext);

  const showHideClassName = showModal
    ? "modal-me display-block-me"
    : "modal-me display-none-me";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-me">
        <div style={{ textAlign: "center", padding: "10px" }}>
          <h1>This is our Terms of Service</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            error molestiae necessitatibus tenetur facilis qui quod, officiis id
            cupiditate atque quae ipsum vel iste impedit repudiandae at
            reprehenderit nam soluta?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatem? Deserunt omnis iure, doloremque reiciendis consequuntur
            autem, inventore quaerat earum, dicta fuga saepe molestias adipisci
            quam nulla fugit. Rerum, animi.
          </p>
        </div>
        <button className="close-btn-me" type="button" onClick={cancelModal}>
          <AiFillCloseSquare className="close-me" />
        </button>
      </section>
    </div>
  );
};

export default Modal;
