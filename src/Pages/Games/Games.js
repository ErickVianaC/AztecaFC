import React from 'react'
import "./Games.css"
import game from "../../utils/Mock/games"
import GameCard from '../../components/GameCard/GameCard'


export default function games() {


  return (
    <div id='jogos' className='all-Games'>
      <div className='games_titulo'>
            <h1>Jogos</h1>
            <p>Aqui você fica por dentro dos ultimos resultados do Azteca</p>
            <div aria-label='seção apenas de ilustrações de botoes'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>
          </div>
      <GameCard game={game[0]}/>
    </div>

  )
}
