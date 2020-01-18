import React, {Component} from 'react'

class ToDoItem extends Component {
    constructor() {
        super()
        this.state = {
            completed: false
        }
    }

    flag(x) {
        switch(x) {
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
            <div>
                <li className="todoitem">
                    <input type="checkbox"/> 
                    <span><strong>{this.flag(this.props.item.flag)}</strong></span>
                    <span> {this.props.item.title}</span>
                    <br/>
                    <span> {this.props.item.description}</span>
                </li>
                <hr/>
            </div>
          
        );
    }
}

export default ToDoItem;