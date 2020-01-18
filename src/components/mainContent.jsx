import React, {Component} from "react"
import Task from './task'
import User from './user'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

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