import React from "react";
const Prettier = ({ modalActive, setModalActive }) => {
    console.log(modalActive);
  return (
    <div
      className={modalActive ? "modal active" : "modal"}
      onClick={() => setModalActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
};
export default Prettier;
