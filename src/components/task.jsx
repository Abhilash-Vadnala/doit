import React, {Component} from "react"

class Task extends Component {
    state = {
        name: "Abhilash",
        description: "Do these tasks. Never delay your task. Just find the right balance where you can achieve your daily goals and find mental peace for yourself.",
        vacationSpots: ["Yosemite NP", "Grand Canyon", "Los Vegas"]
    };

    render() {
        return (
            <div className = "task">
            <h3>Hello {this.state.name}</h3>
            <p>{this.state.description}</p>
            <ul>
                <VacationSpotsItems />
            </ul>
            </div>
        )
    }
}

function VacationSpotsItems(vacationSpots) {
    let str = "";
    for (let index = 0; index < vacationSpots.length; index++) {
       const element = vacationSpots[index];
       str += `<li>${element}</li>`;
   }
   return str; 
}

export default Task;