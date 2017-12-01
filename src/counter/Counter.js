import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  clickHandler = () => {
    // this.setState ((st)=>({
    //     // this.state = st
    //     counter: st.counter + 1
    // }))
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Inc</button>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}
