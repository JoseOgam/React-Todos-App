import React from "react";

const Actions = (props) => {
  return (
    <div>
      <button className="big-button" onClick={props.handlepick}>
        Show what todo
      </button>
    </div>
  );
};

export default Actions;
