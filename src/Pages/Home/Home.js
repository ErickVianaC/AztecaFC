import picture from '../../images/Time/elenco23.jpg'
import escudo from '../../images/Time/escudo.png'
import './Home.css'
import utilsFunctions from "../../utils/Functions/functions"

export default function Home() {

  
  const toogleMenu = () => {
    const ativaMenu = document.querySelector('.fa-bars')
    ativaMenu.addEventListener('click', () => {
      ativaMenu.classList.toggle('fa-x')
    })
  }

  const links = document.querySelectorAll('.scroll');

    //  Percorre todos os links de âncora e adiciona o evento de clique
      links.forEach(link => {
        link.addEventListener('click', event => {
          // Cancela o comportamento padrão do link de âncora
          event.preventDefault();

          // Obtém o identificador exclusivo da seção correspondente
          const id = link.getAttribute('href');

          // Rola suavemente até a seção correspondente usando o método scrollIntoView
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });
  
  return (
    <div id='home'>
      <header>
        <div className='name_escudo'>
        <img src={escudo} className='escudo' alt='imagem do escudo azteca' />
        <h1>Azteca <span>FC</span></h1>
        </div>

        <nav>
            <ul className='navegacao-primaria'>
                <li><a href='#home' class="scroll">Home</a></li>
                <li><a href='#historia' class="scroll">Historia</a></li>
                <li><a href='#elenco' class="scroll">Elenco</a></li>
                <li><a href='#redes' class="scroll">Midias</a></li>
                <li><a href='#jogos' class="scroll">Jogos</a></li>

            </ul>
        </nav>
        <i class="fa-solid fa-bars" onClick={toogleMenu}></i>
      </header>
        <section aria-label='seção curriculo download Erick' className='section-div'>
            <div>
                <h2>SEJA BEM-VINDO</h2>
                <p className='initial-text'>Junte-se a nós e descubra a paixão pelo futebol em uma equipe dedicada e com espírito esportivo. Temos treinos regulares, jogos emocionantes e uma comunidade vibrante que adora se reunir fora dos campos também. Venha fazer parte da nossa família Azteca!</p>
                <h2 className='digitando'> {utilsFunctions.TypingEffect('#AvanteAzteca')}</h2>

            </div>
            <img src={picture} alt='imagem de erick viana'/>
        </section>
    </div>
  )
}
