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
            <div className='player-name'>{player.name}</div>
        </div>
        <div className='bot_info'>
            <div className='info_age'>AGE</div>
            <div className='info_position'>POSITION</div>
            <div className='info_heigth'>HEIGTH</div>
        </div>
         <div className='bot_values'>
            <div className='player-age'>{player.age}</div>
            <div className='player-position'>{player.position}</div>
            <div className='player-heigth'>{player.height}</div>
        </div>
    </div>
  )
}
}

PlayerCard.propTypes = {
  player: PropTypes.object.isRequired,
};

export default PlayerCard;
