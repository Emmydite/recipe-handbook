import React, { Component } from 'react'
import TileMain from './TileMain.component'
import TileFooter from './TileFooter.component'

class Tile extends Component {

    handleClick(){
        console.log(this.props.data.key);
        this.props.show(this.props.data.key);
    }

    render() {
        return (
            <div className="tile" onClick={this.handleClick.bind(this)}>
                <TileMain
                  title = {this.props.data.title}
                  img = {this.props.data.img}
                />
                <TileFooter />  
            </div>
        );
    }
}

export default Tile;
