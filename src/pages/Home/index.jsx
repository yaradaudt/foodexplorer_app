// import { useState } from 'react'
import { Container, Content, Banner, BannerImage, BannerText } from './styles.js'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from  '../../components/Section'
import bannerSVG from '../../assets/banner.svg'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Home() {
  return (
    <Container>
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true} theme='dark' toastStyle={{ 
        backgroundColor: "#00111A", 
        border: "2px solid #065E7C",
      }}
      />
      <Header />
      <main>
        <Content>
          <Banner>
            <BannerImage>
              <img src={bannerSVG}
              alt='Imagem de 5 macarroons(doce ingles) coloridos em queda rodeados por frutos vermelhos.'
              />
            </BannerImage>
            <BannerText>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </BannerText>  
          </Banner>

          <Section categoryName='Refeições' />

          <Section categoryName='Sobremesas' />

          <Section categoryName='Bebidas' />

        </Content>
      </main>
      <Footer />
    </Container>
  )
}

