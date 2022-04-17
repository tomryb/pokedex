import { url } from '../config/url'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const globalState = {
    favPokemon: [],
    pokemon: [],
    search: ''
  }

export const GET_POKEMON = (dispatch) => {
    return (dispatch) => {
      fetch(url + '/cards')
        .then(response =>
          response.json()
        )
        .then(data => {
          dispatch(SET_POKEMON(data.cards))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  export const SET_POKEMON = (data) => {
    return { type: 'SET_POKEMON', value: data }
  }

  const reducer = (state = globalState, action) => {
    switch (action.type) {
      case 'ADD_FAV':
        let arr = state.favPokemon
        arr.push(action.value)
        return { ...state, favPokemon: arr }
      case 'SET_POKEMON':
        return { ...state, pokemon: action.value }
      case 'SET_SEARCH':
        return { ...state, search: action.value }
      default:
        return state
    }
  }

 export const store = createStore(reducer, applyMiddleware(thunk))
