import { React, useState, useEffect } from 'react';
import picture from '../../images/erick2.png'
import './navbar.css'

export default function Home() {


function TypingEffect( text ) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, [text]);
  
  return displayedText;
}

 
  return (
    <div>
      <header>
        <h1>Erick <span>Viana</span></h1>
        <nav>
            <ul className='navegacao-primaria'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Elenco</a>
                </li>
                <li>
                    <a href='/'>Historia</a>
                </li>
            </ul>
        </nav>
      </header>
        <section aria-label='seção curriculo download Erick' className='section-div'>
            <div>
                <h2>Hi There! I'm</h2>
                <h2 className='digitando'> {TypingEffect('Web Developer FullStack')}</h2>
                <p>Olá, meu nome é Erick e tenho 29 anos. Atualmente, moro no Espírito Santo e sou um entusiasta de jogos, atividades físicas e tecnologia. Tenho dois irmãos e sou natural de Minas Gerais.

                Desde cedo, sempre fui fascinado pelo mundo da tecnologia e, por isso, meu objetivo pessoal é ingressar na área de tecnologia. Acredito que essa é uma área que está em constante evolução e oferece diversas oportunidades para o desenvolvimento de soluções inovadoras. Além disso, estou sempre em busca de aprimorar meus conhecimentos e habilidades nessa área, para estar sempre atualizado e preparado para os desafios que possam surgir.

                Fora do mundo profissional, gosto de praticar atividades físicas, como corrida e musculação, pois acredito que uma vida saudável é essencial para alcançar bons resultados em todas as áreas da vida. Também sou um grande fã de jogos, tanto eletrônicos quanto de tabuleiro, e gosto de me divertir com amigos e familiares.</p>

                <a href='#'>Download CV</a>
            </div>
            <img src={picture} alt='imagem de erick viana'/>
        </section>
    </div>
  )
}
