import React from "react";
import Option from "./option";
const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeAll}>remove all</button>
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
