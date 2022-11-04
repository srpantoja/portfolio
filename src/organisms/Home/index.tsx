import * as HStyle from "./style"

import SourceImage from "../../assets/JeanPantoja.jpg"
import CardGithub from "../../molecules/CardGithub"
const Home = () => {
  return (

    <HStyle.ContainerHome>
      <div>
        <div>
          <h4>Oi, eu sou</h4>
          <h1>Jean Pantoja</h1>
          <h4>Sou desenvolvedor full stack </h4>
          <h4>analista em testes automatizados</h4>
          <h4>e apaixonado por desenvolvimento de jogos.</h4>

        </div>
      </div>

      <HStyle.ColumnImage>
        <CardGithub />
        <img src={SourceImage} alt="desenvolvedor Jean Pantoja" />
      </HStyle.ColumnImage>

    </HStyle.ContainerHome>

  )
}

export default Home