import Azteca from '../../images/Time/escudo.png'
import castle_city from '../../images/Adversários/castle-city.png'
import traulitadores from "../../images/Adversários/traulitadores.png"

const games = [
    {
        date: "2023-04-10 20:00",
        hours: '20:00',
        homeTeamName: 'Azteca',
        homeTeamLogo: Azteca,
        awayTeamLogo: castle_city,
        opponent: 'Azteca',
        time: '10/04/2023',
        location: "Campo do Motivo",
        type: "Amistoso",
        weekday: 'SEG',
        day: '10 Abr',
        nomeAdversario: 'Castle City',
        placar: '5 x 8'
    },
    {
        date: "2023-04-19 20:00",
        hours: '20:00',
        homeTeamName: 'Azteca',
        homeTeamLogo: Azteca,
        awayTeamLogo: traulitadores,
        opponent: 'Azteca',
        time: '19/04/2023',
        location: "Campo do Motivo",
        type: "Amistoso",
        weekday: 'QUA',
        day: '19 Abr',
        nomeAdversario: 'Traulitadores',
        placar: ''//ao preencher o placar nesse formato (1 x 1) o card game irá renderizar o palcar no lugar do contador
    },
    
]

export default games