import React from "react";
import Header from "./header";
import Actions from "./actions";
import Options from "./options";
import AddOptions from "./addOptions";
import Modal from "./modal";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handlepick = this.handlepick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.clearOption = this.clearOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined,
    };
  }
  clearOption() {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  }
  deleteOption(data) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => data !== option),
    }));
  }
  removeAll() {
    this.setState(() => ({
      options: [],
    }));
  }

  handlepick() {
    var randomTodo = Math.floor(Math.random() * this.state.options.length);
    var option = this.state.options[randomTodo];
    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  }
  handleAddOption(option) {
    if (!option) {
      return "please enter a valid value to add Items ";
    } else if (this.state.options.indexOf(option) > -1) {
      return "the value exist";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  render() {
    var title = "My Simple Todos App";
    var subtitle = "focusing everyday";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Actions
            handlepick={this.handlepick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              removeAll={this.removeAll}
              deleteOption={this.deleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
            <Modal
              selectOption={this.state.selectedOption}
              clearOption={this.clearOption}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
