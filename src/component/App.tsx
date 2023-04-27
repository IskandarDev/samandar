import "../style/App.css";
import Display from "./Display";
import Button from "./Button";
import {useState} from "react";

function operatorExists(text: string): boolean {
    if (text === "") return true;
    let ops = ["/", "*", "-", "+"];
    for (let i: number = 0; i < ops.length; i++) {
        if (text.includes(ops[i])) {
            return true;
        }
    }
    return false;
}

function getOperator(text: string): string {
    if (text.includes("+")) return "+";
    if (text.includes("-")) return "-";
    if (text.includes("*")) return "*";
    if (text.includes("/")) return "/";
    return "";
}

function App(): JSX.Element {
    const [text, setText] = useState("");
    const buttonInfo: [string, string, () => void][] = [
        ["AC", "white", () => {
            setText("");
        }],
        ["+/-", "white", () => {
            if (operatorExists(text)) {
                if (getOperator(text) === "+") {
                    setText(text.replace(getOperator(text), "-"));
                } else if (getOperator(text) === "-") {
                    setText(text.replace(getOperator(text), "+"));
                } else {
                    let [first, second] = text.split(getOperator(text));
                    if (second[0] !== "-") {
                        second = "-" + second;
                    } else {
                        second = second.substring(1);
                    }
                    setText(first + getOperator(text) + second)
                }
            } else {
                if (text[0] !== "+" && text[0] !== "-") {
                    setText("-" + text);
                } else if (text[0] === "-") {
                    setText(text.substring(1));
                }
            }
        }],
        ["%", "white", () => {
            if (!operatorExists(text)) {
                setText("Error");
            } else {
                const [first, second] = text.split(getOperator(text));
                setText(first + getOperator(text) + (Number.parseInt(second) * 100 / 100));
            }
        }],
        ["/", "orange", () => {
            if (!operatorExists(text)) {
                setText(text + "/");
            }
        }],
        ["7", "white", () => {
            setText(text + "7");
        }],
        ["8", "white", () => {
            setText(text + "8");
        }],
        ["9", "white", () => {
            setText(text + "9");
        }],
        ["*", "orange", () => {
            if (!operatorExists(text)) {
                setText(text + "*");
            }
        }],
        ["4", "white", () => {
            setText(text + "4");
        }],
        ["5", "white", () => {
            setText(text + "5");
        }],
        ["6", "white", () => {
            setText(text + "6");
        }],
        ["-", "orange", () => {
            if (!operatorExists(text)) {
                setText(text + "-");
            }
        }],
        ["1", "white", () => {
            setText(text + "1");
        }],
        ["2", "white", () => {
            setText(text + "2");
        }],
        ["3", "white", () => {
            setText(text + "3");
        }],
        ["+", "orange", () => {
            if (!operatorExists(text)) {
                setText(text + "+");
            }
        }],
        ["0", "white", () => {
            setText(text + "0");
        }],
        [".", "white", () => {
            if (operatorExists(text)) {
                if (!text.split(getOperator(text))[1].includes(".")) {
                    setText(text + ".");
                }
            } else {
                if (!text.includes(".")) {
                    setText(text + ".");
                }
            }
        }],
        ["=", "orange", () => {
            // eslint-disable-next-line no-eval
            setText(eval(text));
        }],
    ];

    return (
        <>
            <div id="calculator">
                <Display text={text}/>
                <div className="row" id="row1">
                    {buttonInfo.map(button => {
                        if (buttonInfo.indexOf(button) < 4) {
                            return <Button key={buttonInfo.indexOf(button)} title={button[0]} bg={button[1]}
                                           onClick={button[2]}/>
                        }
                    })}
                </div>
                <div className="row" id="row2">
                    {buttonInfo.map(button => {
                        if (buttonInfo.indexOf(button) > 3 && buttonInfo.indexOf(button) < 8) {
                            return <Button key={buttonInfo.indexOf(button)} title={button[0]} bg={button[1]}
                                           onClick={button[2]}/>
                        }
                    })}
                </div>
                <div className="row" id="row3">
                    {buttonInfo.map(button => {
                        if (buttonInfo.indexOf(button) > 7 && buttonInfo.indexOf(button) < 12) {
                            return <Button key={buttonInfo.indexOf(button)} title={button[0]} bg={button[1]}
                                           onClick={button[2]}/>
                        }
                    })}
                </div>
                <div className="row" id="row4">
                    {buttonInfo.map(button => {
                        if (buttonInfo.indexOf(button) > 11 && buttonInfo.indexOf(button) < 16) {
                            return <Button key={buttonInfo.indexOf(button)} title={button[0]} bg={button[1]}
                                           onClick={button[2]}/>
                        }
                    })}
                </div>
                <div className="row" id="row5">
                    {buttonInfo.map(button => {
                        if (buttonInfo.indexOf(button) > 15) {
                            return <Button key={buttonInfo.indexOf(button)} title={button[0]} bg={button[1]}
                                           onClick={button[2]}/>
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
