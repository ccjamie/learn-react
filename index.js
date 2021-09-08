import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;

class Hi extends React.Component {
  render() {
    return <h1> Hi {this.props.name} from class. </h1>;
  }
}

var Hello = props => {
  return (
    <h1>
      Hello {props.name} num is {props.num}.
    </h1>
  );
};

var Output = () => {
  return (
    <div>
      <Hello name="a" num="10" />
      <Hello name="b" num="2" />
      <Hi name="c" />
    </div>
  );
};

const el = <Hello name="Jamie" num="3" />;
ReactDOM.render(<Output />, document.getElementById('root'));
