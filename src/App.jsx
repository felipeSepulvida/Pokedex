import React, { useEffect, useState } from 'react';
import { LeftPage } from './components/LeftPage';
import { MiddlePiece } from './components/MiddlePiece';
import { RightPage } from './components/RightPage';
import { UpperPiece } from './components/UpperPiece';

function App() {

    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [index, setIndex] = useState(1)

    useEffect(() => {
      const options = {method: 'GET'}
      fetch(`https://pokeapi.co/api/v2/pokemon/${index}`, options)
        .then(response => response.json())
        .then(response => { setCurrentPokemon(response) })
        .catch(err => console.log(err))
    }, [index])

    return (
      <div className='PokedexWrapper'>
        <div className='UpperWrapper'>
          <UpperPiece />
          <div className='LeftWrapper'>
            <LeftPage sprite={(currentPokemon)? currentPokemon.sprites.other['official-artwork'].front_default : ''} 
                      types={(currentPokemon)? currentPokemon.types : null} />
            <MiddlePiece />
          </div>
        </div>
        <RightPage />
      </div>
    );

}

export default App;
