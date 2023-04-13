import React from 'react'
import "./Redes.css"


export default function about() {

    const links = {
        instagram: 'https://www.instagram.com/erickviana.c/',
        youtube: 'https://www.youtube.com/channel/UCiexsF31JXG1UFDHiEJkVNA',
    }

  return (
    <div id='redes' className='all-Redes'>
      <main>
        <article aria-label='seção services' className='services'>
          <div className='service_titulo'>
            <h1>Redes</h1>
            <p>Fique por dentro do nosso conteudo</p>
            <div aria-label='seção apenas de ilustrações de botoes'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className='div_services'>
            <div className='card_services' >
              <i className="fa-brands fa-instagram"
                 onClick={() => window.open(links.instagram)}/>
              <a href={links.instagram} target="blank">Instagram</a>
            </div>
            <div className='card_services' >
              <i className="fa-brands fa-youtube"
                 onClick={() => window.open(links.youtube)}/>
              <a href={links.youtube} target="blank">Youtube</a>
            </div>
          </div>

          {/* <div className='div_services'>
            <div className='card_services' >
              <i className="fa-brands fa-pinterest"></i>
              <a>Pinterest</a>
            </div>
            <div className='card_services' >
              <i className="fa-brands fa-google-drive"></i>
              <a>Google Drive</a>
            </div>
            <div className='card_services' >
              <i className="fa-brands fa-twitter"></i>
              <a>Twitter</a>
            </div> 
           </div> */}
        </article>
      </main>
    </div>
  )
}
