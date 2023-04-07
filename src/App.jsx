import React, { Component } from 'react';
import { LeftPage } from './components/LeftPage';
import { MiddlePiece } from './components/MiddlePiece';
import { RightPage } from './components/RightPage';
import { UpperPiece } from './components/UpperPiece';

class App extends Component {
  render() {
    return (
      <div className='PokedexWrapper'>
        <div className='UpperWrapper'>
          <UpperPiece />
          <div className='LeftWrapper'>
            <LeftPage />
            <MiddlePiece />
          </div>
        </div>
        <RightPage />
      </div>
    );
  }
}

export default App;
