import { useState, useEffect } from "react";
import "./GameCard.css";
import utils from "../../utils/Functions/functions";

function GameCard(props) {
  const { game } = props;
  const [countdown, setCountdown] = useState(utils.getCountdownTime(game.date));
  const [placar, setPlacar] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdown = utils.getCountdownTime(game.date);
      console.log(newCountdown);
      setCountdown(newCountdown);
      if (newCountdown.days <= 0 && newCountdown.hours <= 0 && newCountdown.minutes <= 0 && newCountdown.seconds <= 0) {
        setFinished(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [game.date]);

  useEffect(() => {
    if (game.placar) {
      setPlacar(game.placar);
    }
  }, [game.placar]);

  return (
    <div className="game-card">
      <div className="left">
        <div className="teams">
          <img src={game.homeTeamLogo} alt={game.homeTeam} />
          <span className="versus">x</span>
          <img src={game.awayTeamLogo} alt={game.awayTeam} title={game.nomeAdversario} />
        </div>
        {placar ? (
          <span className="placar">
            <p>PLACAR FINAL</p>
            {placar}
          </span>
        ) : finished ? (
          <span className="loading-result">Aguardando resultado...</span>
        ) : (
          <div className="countdown">
            <span className="countdown-time">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </span>
          </div>
        )}
      </div>
      <span className="meiuca"></span>
      <div className="rigth">
        <div className="game-info">
          <div className="hora_e_data">
            <div className="game-date">{game.hours}</div>
            <div>
              <div className="game-weekday">{game.weekday}</div>
              <div className="game-time">{game.day}</div>
            </div>
          </div>
          <div className="game-type">{game.type}</div>
          <div className="game-location">{game.location}</div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
