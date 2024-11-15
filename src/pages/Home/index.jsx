// import { useState } from 'react'
import {
  Container,
  Content,
  Banner,
  BannerImage,
  BannerText,
} from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import bannerSVG from "../../assets/banner.svg";

export function Home() {
  return (
    <Container>
      <Header/>
        <Content>
          <Banner>
            <BannerImage>
              <img
                src={bannerSVG}
                alt="Imagem de 5 macarroons(doce ingles) coloridos em queda rodeados por frutos vermelhos."
              />
            </BannerImage>
            <BannerText>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </BannerText>
          </Banner>

          <Section categoryName="Refeições" />

          <Section categoryName="Sobremesas" />

          <Section categoryName="Bebidas" />
        </Content>
      <Footer />
    </Container>
  );
}
