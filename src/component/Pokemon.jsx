import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { url } from '../config/url';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_POKEMON, GET_POKEMON } from '../redux/redux';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    dispatch(GET_POKEMON());
  }, [dispatch]);

  return (
    <div>
      <div>
        <input
          data-testid="search"
          type="text"
          placeholder="search a card here"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onInput={(event) => {
            event.preventDefault();
            fetch(url + '/cards?name=' + search)
              .then((response) => response.json())
              .then((data) => {
                dispatch(SET_POKEMON(data.cards));
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        ></input>
      </div>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col-md-3 col-sm-6" key={pokemon.id}>
              <Card>
                <Card.Img variant="top" src={pokemon.imageUrl} />
              </Card>
              <br></br>
              <Link to={`/detail/${pokemon.id}`}>
                <Button variant="contained">Detail</Button>
              </Link>
              <Button
                variant="outlined"
                onClick={() =>
                  dispatch({ type: 'ADD_FAV', value: pokemon.imageUrl })
                }
              >
                Add to Deck
              </Button>
              <br></br>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
