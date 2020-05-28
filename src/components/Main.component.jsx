import React, { Component } from 'react'

class Main extends Component {

    handleChangeImg(e){
        this.props.update({img : e.target.value});
    }

    handleChangeInstructions(e){
        //change instructions to html of editable elements
        //const regx = /(?:\r\n\r|\n)/g;
        //const str = (toMarkdown(e.target.innerHtml));
        const str = (e.target.innerHtml);
        this.props.update({instructions : str});
    }

    handleChangeIngredients(e){
         //change instructions to html of editable elements
         const regx = /(?:\r\n\r|\n)/g;
         const str = e.target.innerText.replace(regx, '\n\n');
         this.props.update({ingredients : str});
    }

    rawMarkup(text){
        //let rawMarkup = marked(text);
        return {__html:text};
    }

    render() {
        const editable = this.props.editable;
        const editImg = <input
                          type="text"
                          onChange={this.handleChangeImg.bind(this)}
                          value={this.props.img}
                          />
        return (
            <main className="box__main">
              <div className="row">
                  <div className="column six">
                      <h3 className="box__subheading"> Ingredients</h3>
                     <p 
                     className="box__ingredients" 
                     contentEditable={editable ? true : false}
                     onBlur = {this.handleChangeIngredients.bind(this)}
                     dangerouslySetInnerHTML = {this.rawMarkup(this.props.ingredients)}   
                     />     
                  </div>

                  <div className="column six">
                     <img 
                     src={this.props.img}
                     className="box__img"
                     alt="Image"/>
                     {editable && editImg}
                  </div>
                  </div>
                  <h3>Instructions</h3>
                  <p 
                  className="box__instructions"
                  contentEditable={editable ? true : false}
                  onBlur={this.handleChangeInstructions.bind(this)}
                  dangerouslySetInnerHTML={this.rawMarkup(this.props.instructions)}
                  />    
            </main>
        )
    }
}

export default  Main;