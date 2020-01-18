import React, {Component} from "react"
import ToDoItem from './toDoItem'
import DoItData from '../doItData'

class Task extends Component {
    constructor() {
        super()
        this.state = {
            description: "Do these tasks. Never delay your task. Just find the right balance where you can achieve your daily goals and find mental peace for yourself.",
            doItDate: DoItData
        };
    }

    renderList() {
        const dataItems = this.state.doItDate.map(item => {
            return(
                <ToDoItem key={item.id} item={item}/>
            );
        })
        return dataItems
    }

    render() {
        return (
            <div className = "doit-list">
                <p>{this.state.description}</p>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

// function renderList() {
//     const dataItems = .map(item => {
//         return(
//             <ToDoItem key={item.id} item={item}/>
//         );
//     })
//     return dataItems
// }

export default Task;