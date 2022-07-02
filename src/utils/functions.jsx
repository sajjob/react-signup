import { useContext } from "react";
import Modal from "../components/UI/Modal";

//use in Signup.jsx for "Signup Modal 'Terms of Services' "
export const modal = () => {
  return (
    <>
      <Modal>
        <div style={{ textAlign: "center", padding: "10px" }}>
          <h1>This is our Terms Services</h1>
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
      </Modal>
    </>
  );
};

