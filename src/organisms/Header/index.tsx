import * as HStyle from "./style"
import Logo from "../../molecules/Logo"
import Menu from "../../molecules/Menu"
import Button from "../../atoms/Button"

const Header = () => {
    return (
        <HStyle.Box>
            <Logo />
            <Menu />
        </HStyle.Box>
    )
}

export default Header