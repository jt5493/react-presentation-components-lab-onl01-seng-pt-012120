import React, { Component } from "react";


class SimpleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: 'happy'
        }
    }
    

    handleClick = () => {
        const sad = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood: sad})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}
export default SimpleComponent