// import { useState } from 'react'
import { Container, Content } from './styles.js'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from  '../../components/Section'
import bannerSVG from '../../assets/banner.svg'


export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div className='banner'>
            <div className='banner-image'>
              <img src={bannerSVG}
              alt='Imagem de 5 macarroons(doce ingles) coloridos em queda rodeados por frutos vermelhos.'
              />
            </div>
            <div className='banner-text'>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>  
          </div>

          <Section title='Refeições'>

          </Section>

          <Section title='Sobremesas'>
            
          </Section>

          <Section title='Bebidas'>
            
          </Section>


        </Content>
      </main>
      <Footer />
    </Container>
  )
}

