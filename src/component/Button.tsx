import "../style/Button.css";
import ButtonProps from "../interface/ButtonProps";

function Button({title, bg, onClick}: ButtonProps): JSX.Element {
    if (!title.includes("0")) {
        return (
            <>
                <button className="button" style={{backgroundColor: bg}} onClick={onClick}>
                    {title}
                </button>
            </>
        );
    } else {
        return (
            <>
                <button className="button" style={{backgroundColor: bg, width: 150}} onClick={onClick}>
                    {title}
                </button>
            </>
        );
    }
}

export default Button;
