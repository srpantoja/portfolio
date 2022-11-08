import * as SStyle from "./style"
import FullStackSkills from "../../molecules/FullStackSkills"
import AutomatedTest from "../../molecules/AutomatedTest"
import GameDeveloper from "../../molecules/GameDeveloper"
const Skills = () => {
    return (
        <SStyle.Main id="habilidades">
            <h1>Habilidades</h1>
            <SStyle.Container>
                <SStyle.SkillContainer>
                    <h4>Desenvolvedor full stack</h4>
                    <FullStackSkills />
                </SStyle.SkillContainer>
                <SStyle.SkillContainer>
                    <h4>Analista de testes</h4>
                    <AutomatedTest />
                </SStyle.SkillContainer>
                <SStyle.SkillContainer>
                    <h4>Desenvolvedor de jogos</h4>
                    <GameDeveloper />
                </SStyle.SkillContainer>
            </SStyle.Container>
        </SStyle.Main>

    )
}

export default Skills