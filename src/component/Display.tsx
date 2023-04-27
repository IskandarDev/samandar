import "../style/Display.css";
import "../interface/DisplayProps";
import DisplayProps from "../interface/DisplayProps";

function Display({text}: DisplayProps): JSX.Element {
    return (
        <>
            <div className="display">
                {text}
            </div>
        </>
    );
}

export default Display;
