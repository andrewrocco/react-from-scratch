var React = require('react');
var ReactDOM = require('react-dom');

// 1. Hello World!
var HelloWorld = React.createClass({
  render: function() {
    return <h1>{this.props.message}</h1>;
  }
});

ReactDOM.render(<HelloWorld message="Hello, World!"/>, document.getElementById('hello'));

// 2. Events from a text field
var TextForm = React.createClass({

  // default data state for the component
  getInitialState: function() {
    return {
      value: '',
      output: 'Awaiting input...'
    };
  },

  // sets this.state.value to the input field value
  handleChange: function(event) {
    this.setState( {value: event.target.value} );
  },

  // sets this.state.output to state value
  handleClick: function(event) {
    event.preventDefault();
    this.setState( {output: this.state.value} );
  },

  // render the form
  render: function() {
    return (
      <form className="react-form">
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

ReactDOM.render(<TextForm />, document.getElementById('form'));
