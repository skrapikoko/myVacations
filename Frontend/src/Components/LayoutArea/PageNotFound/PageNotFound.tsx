import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound(): JSX.Element {

    return (
        <div className="PageNotFound">
            <h2>oh no!</h2>
            <div className="msg404">4<div>0</div>4</div>
            <p>It seems that the page you are looking for does not exist</p>

            <NavLink to={"/"}>Home</NavLink>
        </div>
    );
}

export default PageNotFound;
