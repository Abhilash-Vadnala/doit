import React, {Component} from 'react'

class ToDoItem extends Component {
    state = {
        itemDescription: "Learn React the right way",
        flagged: false,
        flag: 3
    }

    flag() {
        switch(this.state.flag) {
            case 1:
                return <span>!</span>;
            case 2:
                return <span>!!</span>;
            case 3:
                return <span>!!!</span>;
            default:
                return ;
        }
    };

    render() {
        return(
            <li className="todoitem">
                <input type="checkbox"/> 
                <span>{this.state.itemDescription}</span>
            </li>
        );
    }
}

export default ToDoItem;