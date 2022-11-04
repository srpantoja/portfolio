import * as MStyle from "./style"
const Menu = () => {
    return (
        <MStyle.MenuList>
            <MStyle.ItemList><a href="#">Home</a></MStyle.ItemList>
            <MStyle.ItemList><a href="#sobremim">Sobre mim</a></MStyle.ItemList>
            <MStyle.ItemList><a href="#Habilidades">Habilidades</a></MStyle.ItemList>
            <MStyle.ItemList><a href="#">Projetos</a></MStyle.ItemList>
            <MStyle.ItemList><a href="#">Contato</a></MStyle.ItemList>
        </MStyle.MenuList>
    )
}

export default Menu