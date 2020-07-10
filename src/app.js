import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    var title = "My Simple Todos App";
    var subtitle = "hello react";
    var options = ["autumn", "spring", "winter", "summer"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Options extends React.Component {
  removeAll() {
    alert("remove all options");
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>remove all</button>
        {this.props.options.map((option) => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class Actions extends React.Component {
  handlepick() {
    alert("we are climate seasons");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlepick}>Action button</button>
      </div>
    );
  }
}

class AddOptions extends React.Component {
  addOption(e) {
    e.preventDefault();
    var option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}
// const hello = (
//   <div>
//     <Header />
//   </div>
// );

ReactDOM.render(<Hello />, document.getElementById("app"));
