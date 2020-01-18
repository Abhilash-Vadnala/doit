import React, {Component} from 'react'

class List extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return(
            <h3>{this.props.name}</h3>
        );
    }
}

export default List