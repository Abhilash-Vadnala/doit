import React, {Component} from "react"
import ToDoItem from './toDoItem'
import List from './list'

class Task extends Component {
    state = {
        name: "Abhilash",
        description: "Do these tasks. Never delay your task. Just find the right balance where you can achieve your daily goals and find mental peace for yourself.",
        vacationSpots: ["Yosemite NP", "Grand Canyon", "Los Vegas"]
    };

    VacationSpotsItems(vacationSpots) {
        let str = "";
        for (let index = 0; index < this.state.vacationSpots.length; index++) {
           const element = vacationSpots[index];
           str += `<li><input type="checkbox"/> <span>${element}</span></li>\n\t`;
       }
       return str;
    };

    render() {
        return (
            <div className = "todo-list">
                <p>{this.state.description}</p>
                <ul>
                    <List 
                        name="Learnings"
                    />
                    <ToDoItem />
                </ul>
            </div>
        )
    }
}

export default Task;