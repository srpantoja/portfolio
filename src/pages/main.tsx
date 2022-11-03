import Frontend from "../templates/Frontend/index"
import * as PStyle from "./style"
import SourceImage from "../assets/JeanPantoja.jpg"
import CardGithub from "../molecules/CardGithub"

function Main() {

  return (
    <Frontend>
      <PStyle.ContainerHome>
        <div>
          <div> 
            <h4>Oi, eu sou</h4>
            <h1>Jean Pantoja</h1>
            <h4>Sou desenvolvedor full stack</h4>
            <h4>e analista em testes automatizados.</h4>
          </div>
        </div>

        <PStyle.ColumnImage>
          <CardGithub />
          <img src={SourceImage} alt="desenvolvedor Jean Pantoja" />
        </PStyle.ColumnImage>
      
      </PStyle.ContainerHome>
      <PStyle.ContainerAboutUS>
        <div id="sobremim">
          <h1 >Sobre mim</h1>
          <h4>
            <p>   Meu nome é Jean Pantoja e sou apaixonado por programação. Meu primeiro contato com programação foi em 2012, quando ainda estava no ensino fundamental com a tecnologia visual basic 6, naquela época utilizava essa tecnologia para desenvolvimento de jogos na game engine Eclipse Origins. </p>
            <p>   Apesar de conhecer a área muito cedo, não entendia nada de programação, em 2015 à 2017 foi quando realmente tive o contato com programação em uma escola técnica de ensino profissional no curso de informática, a partir daí fiquei apaixonado pela área e decidi que meu sonho era trabalhar com desenvolvimento de software, em 2018 entrei na universidade federal do ceará, campus quixadá, lugar onde amadureci meu conhecimento em programação.</p>
            <p>   Hoje trabalho como analista de testes principalmente com foco em testes automatizados e também participo de forma voluntária de dois projetos de jogos atuando como desenvolvedor.</p>
          </h4>
        </div>
      </PStyle.ContainerAboutUS>

    </Frontend>
  )
}
 
export default Main
