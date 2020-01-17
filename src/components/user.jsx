import React, {Component} from 'react';

class User extends Component {
    state = {
        name: "Abhilash Vadnala"
    };
    
    wish() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
    
        if(hours >= 5 && hours <= 12)
            timeOfDay = 'Good Morning.'
        else if(hours > 12 && hours <= 17)
            timeOfDay =  'Good Afternoon.'
        else
            timeOfDay = 'Good Night.'
    
        return timeOfDay;
    };

    render() {
        return(
            <h3>Hello {this.state.name}, {this.wish()}</h3>
        );
    }; 
}

export default User;