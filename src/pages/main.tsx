import Frontend from "../templates/Frontend/index"
import Home from "../organisms/Home"
import AboutUs from "../organisms/AboutUs"
import Skills from "../organisms/Skills"
import Experience from "../organisms/Experience"
function Main() {

  return (
    <Frontend>
      <Home />
      <AboutUs />
      <Skills />
      <Experience />
    </Frontend>
  )
}

export default Main
