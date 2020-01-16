import React, {Component} from "react"

class task extends Component {
    state = {
        name: "Abhilash",
        description: "Do these tasks"
    };
    render() {
        return (
            <div class = "task">
            <h1>Hello {this.state.name}</h1>
            <h2>Your tasks are here</h2>
            <ul>
                <li>{this.state.description}</li>
            </ul>
            </div>
        )
    }
}

export default task;