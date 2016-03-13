var React = require('react');
var ReactDOM = require('react-dom');

// 1. Hello World!
var HelloWorld = React.createClass({
  render: function() {
    return <h1>Hello, world!</h1>;
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('hello'));

// 2. Events from a text field
var TextForm = React.createClass({
  getInitialState: function() {
    return {
      value: '',
      output: 'Awaiting input...'
    };
  },
  handleChange: function(event) {
    this.setState( {value: event.target.value} );
  },
  handleClick: function(event) {
    event.preventDefault();
    this.setState( {output: this.state.value} );
  },
  render: function() {
    return (
      <form className="awesome-form">
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" onClick={this.handleClick} value="Submit" />
        <p>{this.state.output}</p>
      </form>
    );
  }
});

ReactDOM.render(<TextForm/>, document.getElementById('form'));
