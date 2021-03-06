import React, { Component } from 'react'
import Tile from './Tile.component'


export default class Index extends Component {
    render() {
          const data = this.props.data;
            const tilNodes = data.map(( data) => 
                      <Tile 
                      key = {data.key}
                      show={this.props.show}
                      data = {data}
                      />
              );
        return (
            <div className="container">
                <main  className="tile-container">
                   {tilNodes}
                </main>
            </div>
        )
    }
}
