import React from "react"

interface ClassCounterProps {
    className?: string;
}

interface ClassCounterState {
    count: number;
}

class ClassCounter extends React.Component<ClassCounterProps, ClassCounterState> {

    constructor(props: ClassCounterProps) {
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default ClassCounter;