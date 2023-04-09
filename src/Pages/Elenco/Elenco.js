import React from 'react'
import './Elenco.css'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import AllPlayers from '../../utils/Mock/allPlayers'
console.log(AllPlayers);



class Elenco extends React.Component {
  render() {

    return (
    <div id='elenco' className='elenco'>
      <div className='elenco_titulo'>
            <h1>Elenco</h1>
            <p>Conheça nosso plantel de jogadores</p>
            <div aria-label='seção apenas de ilustrações de botoes'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
      </div>
      
      <div className='player_card'>
        <h1>Goleiro</h1>
        <div className='players'>
          {AllPlayers
          .filter((obj) => (obj.position === 'Goleiro'))
          .map((player) => (<PlayerCard player={ player }/>))
           }
        </div>
        <h1>Fixo</h1>
        <div className='players'>
          {AllPlayers
          .filter((obj) => (obj.position === 'Fixo'))
          .map((player) => (<PlayerCard player={ player }/>))
           }
        </div>
        <h1>Meia</h1>
        <div className='players'>
          {AllPlayers
          .filter((obj) => (obj.position === 'Meia'))
          .map((player) => (<PlayerCard player={ player }/>))
           }
        </div>
        <h1>Pivo</h1>
        <div className='players'>
          {AllPlayers
          .filter((obj) => (obj.position === 'Pivo'))
          .map((player) => (<PlayerCard player={ player }/>))
           }
        </div>
      </div>
        
    </div>
    )
      
    
  }
}

export default Elenco