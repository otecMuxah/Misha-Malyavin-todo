import React from 'react';

export class Counter extends React.Component {
    constructor(){
        super();
        this.counter = 0;
    }

    clickHandler = (event) => {
        this.counter++;
        console.log(this.counter)
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.clickHandler}>Inc</button>
                <span>{this.counter}</span>
            </div>
        );
    }
}