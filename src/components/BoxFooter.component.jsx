import React, { Component } from 'react'
import {FaTrash, FaEdit} from 'react-icons/fa'

 class BoxFooter extends Component {
    render() {
        return (
            <footer className="box__footer">
              <button className="btn-warning" onClick={this.props.delete}>
                  <FaTrash className=" btn-icon"/>
                 Delete
              </button>
              <button onClick={this.props.toggleEdit}>
              <FaEdit className=" btn-icon"/>
              Edit
              </button>
            </footer>
        )
    }
}

export default BoxFooter;