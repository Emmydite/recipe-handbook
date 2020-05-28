import React, { Component } from 'react'
import {FaTimes} from 'react-icons/fa'

 class Header extends Component {

    handleChange(e){
        //change title to elememt of editable elements
        this.props.update({title: e.target.innerText});
        console.log(this.props.title)
    }
    render() {
        return (
            <header className="box__header" >
                <h2 className="box__title" 
                contentEditable={this.props.editable ? true : false}
                onKeyPress={this.handleChange.bind(this)}>
                 {this.props.title}
                </h2>
                <FaTimes className=" close pull-right" onClick={this.props.close}/>

            </header>
        )
    }
}

export default Header;