import React, {Component} from 'react';

class newTask extends Component
{
    render(){
        return <input value={this.props.name}/>;
    }
}
// const newTask = (props) => {
//     console.log(props);
//     return <input value="hellobitch"/>;
// }

export default newTask;