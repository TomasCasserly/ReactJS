import React, {Component} from 'react';

export default class FirstComponent extends Component {


render() {
    const element = (<div>Text Papa Element</div>)
    return (<div className="comptext">
    <h3>First Component</h3>
        {this.props.displaytext}
        {element}
    </div>)
    }
}