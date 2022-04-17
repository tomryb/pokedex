import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import * as searchPokemon from 'pokemontcgsdk';

function Detail() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    searchPokemon.card
      .find(id)
      .then((result) => {
        setPokemon(result.card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div key={pokemon.id}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>
        {pokemon.rarity} , {pokemon.types}
      </p>

      <center>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Damage</th>
          </tr>
          {pokemon.attacks &&
            pokemon.attacks.map((desc) => (
              <tr>
                <td>{desc.name}</td>
                <td>{desc.text ? desc.text : 'No description'}</td>
                <td>{desc.damage}</td>
              </tr>
            ))}
        </table>
      </center>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Detail;
