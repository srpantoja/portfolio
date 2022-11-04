import * as ASStyle from "./style"
import UnityLogo from "../../assets/unitylogo.png"
const GameDeveloper = () => {
    return(
        <ASStyle.Container>
            <div>
                <img src={UnityLogo} />
                <h4>Unity3D</h4>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png" />
                <h4>Godot</h4>
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/gamemaker/gamemaker.png" />
                <h4>GameMaker</h4>
            </div>
            <div>
                <img src="https://phaser.io/images/logo/logo-download.png" />
                <h4>Phaser3</h4>
            </div>
        </ASStyle.Container>
    )
}   

export default GameDeveloper