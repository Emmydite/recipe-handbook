import React, { Component } from 'react'
import {FaBoxOpen} from 'react-icons/fa'

 class TileFooter extends Component {
    render() {
        return (
           <footer className="tile__footer">
            <button className="btn-primary">
                <FaBoxOpen className=" btn-icon"/>
           Open recipe
            </button>
           </footer>
        );
    }
}

export default TileFooter;