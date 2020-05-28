import React, { Component } from 'react'
import {FaTimes} from 'react-icons/fa'

 class AddRecipe extends Component {
     constructor(){
         super();

         this.state={
             error : false
         }
     }

     handleTitleChange(e){
         this.setState({title: e.target.value})
     }

     handleImageChange(e){
         this.setState({img: e.target.value})
     }

     handleIngredientChange(e){
         this.setState({ingredients: e.target.value})
     }

     handleInstructionChange(e){
        this.setState({instructions: e.target.value})
     }

     handleSubmit(e){
         e.preventDefault();
         if(!this.state.title || !this.state.ingredients || !this.state.instructions){
             this.error();
             return;
         }
         this.props.add(
             this.state.title,
             this.state.ingredients,
             this.state.instructions,
             this.state.img
         )
         this.props.toggleHidden();
     }

     error(){
         this.setState({error: true});
     }

     handleClick(e){
         const formBg = document.querySelector('.form-bg');
         const isClickInside = formBg.contains(e.target);

         if(!isClickInside){
             //this click was outside the specified element, do something
             this.props.toggleHidden();
         }
     }
    render() {
        let error;
        if(this.state.error){
            error = <span className="text-color-warnig">
                you must complete all fields marked as reqiured
            </span>
        }
        
        return (
            <div className="form-bg-overlay" onClick={this.handleClick.bind(this)}>
                <div className="form-bg">
                   <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                      <FaTimes className=" zmdi-close pull-right" onClick={this.props.toggleHidden}/>
                      <h2 className="form__title">Add Recipe</h2>
                      
                      <label for="recipeName">Recipe Name *</label>
                      <input 
                      id="recipeName"
                      type="text"
                      onChange={this.handleTitleChange.bind(this)}
                      />
                      <label for="ingredients"> Ingredients *</label>
                      <textarea 
                       id="ingredients"
                       onChange={this.handleIngredientChange.bind(this)}
                      />
                       <label for="instructions"> Instructions *</label>
                      <textarea 
                       id="instructions"
                       onChange={this.handleInstructionChange.bind(this)}
                      />
                    <label for="imageUrl">Image URL *</label>
                      <input 
                      id="imageUrl"
                      type="text"
                      onChange={this.handleImageChange.bind(this)}
                      />

                      <input 
                      type="submit"
                      value="add recipe"
                      className="btn-primary"
                      />
                      {error}
                   </form>
                </div>
            </div>
        )
    }
}

export default AddRecipe