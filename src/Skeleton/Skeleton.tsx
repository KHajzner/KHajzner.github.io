import { Link } from 'react-router-dom';
import './Skeleton.scss'

const Skeleton = ({ children }: { children: any }) => {
    return (
        <div className="frame">
            <div className="sideNav">
                <div className="me">
                    <img id="avatar" src={require("../static/Avatar.png")} />
                    Kalina's Corner
                </div>
            </div>
            <div className="mainContent">
                <nav className="navigation">
                    <Link to="/"><button className="pixel-corners">HOME</button></Link>
                    <Link to="/projects"><button className="pixel-corners">PROJECTS</button></Link>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default Skeleton;