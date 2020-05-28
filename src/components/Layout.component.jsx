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
        return (
           <RecipeBox />
        )
    }
}

export default Layout