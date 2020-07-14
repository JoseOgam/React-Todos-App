import React from "react";
import Option from "./option";
const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3>todos</h3>
        <button className="button button--link" onClick={props.removeAll}>
          remove all
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">please add your todos</p>
      )}
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            optionText={option}
            deleteItem={props.deleteOption}
          />
        );
      })}
    </div>
  );
};
export default Options;
