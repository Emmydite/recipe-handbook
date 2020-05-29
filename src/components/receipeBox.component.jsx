import React from 'react';
import Box from './Box.component'
import HeaderHeader from './HeaderHeader.component'
import Index from './Index.component'
import Footer from './Footer.component'


class RecipeBox extends React.Component{
    constructor(){
        super();
        const storedRecipe = localStorage.getItem('recipesFCC');
        let data;
        if(storedRecipe){
            data = JSON.parse(storedRecipe);
        }
        else{
            data = []
        }

        this.state = {
            data : data,
            counter : 0,
            //the index of which recipe to populate box with
            currIndex : 0,
            showBox : false
        };
    }

    addRecipe(title, ingredients, instructions, img){
        let data = this.state.data;
        let newCounter = this.state.counter + 1;
        
        this.setState({counter : newCounter});
        
        const newRecipe = {
            key : this.state.counter,
            title : title,
            ingredients : ingredients,
            instructions : instructions
        };

        if(img){
            newRecipe.img = img;
        }
        data.push(newRecipe);
        //this.forceUpdate();
        this.saveToLocal();
    }

    getIndex(Key){
        let i = this.state.data.findIndex((element) => {
              return element ? element.key === Key : ""
        });

        return i;
    }

    updateRecipe(key, title, ingredients, instructions, img){
        const data = this.state.data;
        let i = this.getIndex(key);

         data[i].title = title;
         data[i].ingredients = ingredients;
        data[i].instructions = instructions;
        data[i].img = img;
        this.forceUpdate();
        this.saveToLocal();
    }

    deleteRecipe(key){
       let i = this.getIndex(key);
       this.state.data.splice(i, 1);
       this.forceUpdate();
       this.closeBox();
       this.saveToLocal();
    }

    saveToLocal(){

            localStorage.setItem('recipesFCC', JSON.stringify(this.state.data));     
    }

    closeBox(){
        this.setState({showBox:false});
    }

    showBox(key){
      const index = this.getIndex(key);
      this.setState({
          showBox : true,
          currIndex : index
      });
    }

    render(){
        let box;
        if(this.state.showBox){
            box = <Box 
                    data={this.state.data[this.state.currIndex]}
                    update={this.updateRecipe.bind(this)}
                    delete={this.deleteRecipe.bind(this)}
                    close={this.closeBox.bind(this)}
                    />
        }

        return(
            <div>
                {box}
                <HeaderHeader add={this.addRecipe.bind(this)}/>
                <Index 
                  data={this.state.data} 
                  show={this.showBox.bind(this)}
                />  
                <Footer />
            </div>
        );
    }
}

export default RecipeBox;