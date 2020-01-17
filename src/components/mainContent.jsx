import React, {Component} from "react"
import Task from './task'
import User from './user'

class Main extends Component {
    state = {};

    render() {
        return (
            <main>
                <User />
                <Task />
            </main>
        );
    }
}

export default Main;