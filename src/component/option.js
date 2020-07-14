import React from "react";

const Option = (props) => {
  return (
    <div className="option">
      {props.optionText}
      <button
        className="button"
        onClick={(e) => {
          props.deleteItem(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
