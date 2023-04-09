import React from 'react'
import picture from '../../images/Time/elenco23.jpg'
import "./Historia.css"


export default function historia() {
  return (
    <div id='historia' className='all'>
        <main>
            <article aria-label='seção sobre mim' className='sobre'>
                <div className='sobre_titulo'>
                    
                    <h1>Historia</h1>
                    <p>Azteca Futebol Clube</p>
                    <div aria-label='seção apenas de ilustrações de botoes'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <img src={picture} alt='foto de erick viana'></img>
                <div className='sobre_conteudo'>
                    <div className='sobre_texto'>
                        <h1>Por Dentro da História</h1>
                        <p>
                            O Azteca é um clube de futebol society fundado em 2015 na cidade da Serra, Espírito Santo. Tudo começou quando um grupo de amigos, que já jogava futebol juntos em peladas, decidiu criar um time para participar de torneios e competições locais. O nome escolhido foi inspirado na cultura asteca, conhecida por sua garra e determinação, características que o time adotou como lema para conquistar suas vitórias. Ao longo dos anos, o Azteca cresceu e se consolidou como uma das principais referências no futebol society da região. Jogadores talentosos e dedicados foram chegando ao time, que passou a contar com um elenco de alto nível e uma comissão técnica experiente. A história do Azteca é um exemplo de como a união entre amigos pode resultar em grandes conquistas no esporte e na vida. O clube segue firme em sua missão de levar alegria e paixão aos amantes do futebol, sempre com muita garra, determinação e respeito.
                        </p>
                    </div>
                    <div className='sobre_info'>
                        <p><i class="fa-solid fa-calendar-days"></i> Fundação: 15 Fevereiro 2015</p>
                        <p><i class="fa-sharp fa-solid fa-location-dot"></i> Local: Campo do Motivo, Cidade Continental, Serra - ES</p>
                        {/* <p><i class="fa-solid fa-flag"></i> Country: Brazilian</p> */}
                        {/* <p><i class="fa-solid fa-envelope"></i> Email: suporte.aztecafc@gmail.com</p> */}
                    </div>
                </div>
            </article>
        </main>
      
    </div>
  )
}
