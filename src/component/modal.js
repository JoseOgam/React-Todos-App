import React from "react";
import Modal from "react-modal";

var ModalItem = (props) => {
  return (
    <Modal
      isOpen={!!props.selectOption}
      onRequestClose={props.clearOption}
      contentLabel="Select Option"
      closeTimeoutMS={500}
      className="modal"
    >
      <h3 className="modal__title">Selected Item</h3>
      {props.selectOption && (
        <p className="modal__body">{props.selectOption}</p>
      )}
      <button className="button" onClick={props.clearOption}>
        Okay
      </button>
    </Modal>
  );
};

export default ModalItem;
