import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

function Deck() {

  const favPokemon = useSelector((state) => state.favPokemon);

  return (
    <div>
      <h3>Your Deck</h3>
      <div className="container">
        <div className="row">
          {favPokemon.map((pokemon) => (
            <div className="col-md-3 col-sm-6" key={pokemon.id}>
              <Card>
                <Card.Img variant="top" src={pokemon} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deck;
