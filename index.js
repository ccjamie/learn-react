import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

componentDidMount(){
  this.setState({counter:42})
}

var Counter = () => {
  const [counter, setCounter] = useState(0);



  var increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p> {counter} </p>
      <button onClick={increment}>Increment </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
