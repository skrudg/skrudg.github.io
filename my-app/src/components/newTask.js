import React, {Component} from 'react';

class newTask extends Component
{
    render(){
        return <input value={this.props.name}/>;
    }
}

export default newTask;