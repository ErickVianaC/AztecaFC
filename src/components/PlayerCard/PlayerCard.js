import React from 'react'
import PropTypes from 'prop-types';
import '../../Pages/Elenco/Elenco.css'


import './PlayerCard.css'
// import escudo from "../../images/escudo.png"

class PlayerCard extends React.Component{
  render() {
  const { player } = this.props;
    return (
  <div className='div-card'>
        <div className='top'>
            <div className='player-number'>{player.number}</div>
            <div className='shield'></div>
        </div>
        <div className='mid'>
            <img src={player.image} className='image_player' alt={`Imagem do jogador ${player.name}`}/>
            <p className='player-name'>{player.name}</p>
        </div>
        <div className='bot_info'>
            <p className='info_age'>AGE</p>
            <p className='info_position'>POSITION</p>
            <p className='info_heigth'>HEIGTH</p>
        </div>
         <div className='bot_values'>
            <p className='player-age'>{player.age}</p>
            <p className='player-position'>{player.position}</p>
            <p className='player-heigth'>{player.height}</p>
        </div>
    </div>
  )
}
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired,
};

export default PlayerCard;
