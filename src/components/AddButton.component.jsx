import React, { Component } from 'react'

 class AddButton extends Component {
    render() {
        return (
            <button className="action pull-right" onClick={this.props.toggleHidden}>
                Add Recipe
            </button>
        )
    }
}

export default AddButton;