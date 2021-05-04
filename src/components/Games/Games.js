import React, { Component } from 'react';

const isElectron = process.env.NODE_ENV === 'electron' ? true : false;
let ipcRenderer = false;
if (isElectron) {
    ipcRenderer = require('electron').ipcRenderer;
}

class Games extends Component {

    render() {
        return (

          <main>
            {this.props.children}
          </main>

            <div className='homeWrapper'>
                <h2>MegaClient</h2>
                <p>Game</p>
            </div>
        );
    }
};

export default Games;
