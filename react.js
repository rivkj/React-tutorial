const render = () => {
  document.getElementById('mountNode').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement('input', null),
      React.createElement('pre', null, new Date().toLocaleTimeString())
    ),
    document.getElementById('mountNode2')
  );
};

setInterval(render, 1000);

function Button (props) {
  return React.createElement(
    "button",
    { type: "submit" },
    props.label
  );
}

ReactDOM.render(
  React.createElement(Button, { label: "Save"}),
  mountNode
);

// The following will render an HTML button
// (and ignore the fancy button function)
ReactDOM.render(<button />, mountNode);

const RandomValue = () => (
  <div>
    { Math.floor(Math.random() * 100) }
  </div>
);

ReactDOM.render(<RandomValue />, mountNode);

const ErrorDisplay = ({ message }) => (
  <div style={ { color:'red', backgroundColor:'yellow' } }>
    {message}
  </div>
);

ReactDOM.render(
  <ErrorDisplay
    message="These aren't the droids you're looking for"
  />,
  mountNode
);

class ConditionalStyle extends React.Component {
  render() {
    return (
      <div style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
        How do you like this?
      </div>
    );
  }
}

ReactDOM.render(
  <ConditionalStyle />,
  mountNode,
);

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.label}</button>
    );
  }
}

// Use it (same syntax)
ReactDOM.render(<Button label="Save" />, mountNode);

const Button = ({ clickValue, clickAction }) => {
  return (
    <button onClick={() => clickAction(clickValue)}>
      +{clickValue}
    </button>
  );
};

const Display = ({ content }) => (
  <pre>{content}</pre>
);

const CountManager = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = (increment) =>
    setCount(count + increment);

  return (
    <div>
      <Button clickAction={incrementCounter} clickValue={1} />
      <Button clickAction={incrementCounter} clickValue={5} />
      <Button clickAction={incrementCounter} clickValue={10} />
      <Display content={count} />
    </div>
  );
}

ReactDOM.render(<CountManager />, mountNode);

const CharacterCounter = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event) => {
    const element = event.target;
    setInputValue(element.value);
  };
  
  return (
    <div>
      <textarea cols={80} rows={10} value={inputValue} onChange={handleChange} />
      <div>Count: {inputValue.length}</div>
    </div>
  );
};

ReactDOM.render(<CharacterCounter />, mountNode);