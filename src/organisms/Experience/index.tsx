import * as EStyle from "./style"
import mock from "./data"
import * as experience from "./experience"
const Experience = () => {
    return (
        <EStyle.Container id="experiencia">
            <div>
                <h1>
                    Experiência profissional
                </h1>
                <EStyle.ExperienceContainer>

                    {
                        mock.experiences.map((value: experience.Experience, index: Number) => {
                            return (
                                <EStyle.ExperienceBox>
                                    <EStyle.ExperienceText>
                                        <h5><strong>{value.title}</strong></h5>
                                        <h6><strong>{value.modality}</strong></h6>
                                        <h6>{value.workingtime}</h6>
                                        <ul>
                                            {value.activities.map((value: experience.Activities) => {
                                                return <li>{value.title}</li>
                                            })}
                                        </ul>
                                        <h6><strong>Competências: </strong>{value.skills}</h6>
                                    </EStyle.ExperienceText>
                                </EStyle.ExperienceBox>
                            )

                        })
                    }

                </EStyle.ExperienceContainer>
            </div>
        </EStyle.Container>
    )
}

export default Experience