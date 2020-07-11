import React from "react";

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  addOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value.trim();
    var errorData = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: errorData,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;
