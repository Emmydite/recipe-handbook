import React, { Component } from 'react'
import RecipeBox from './receipeBox.component'

 class Layout extends Component {
     constructor(){
         super();
         this.state={
             data: []
         };
     }
    render() {
        localStorage.clear();
        return (
           <RecipeBox />
        )
    }
}

export default Layout