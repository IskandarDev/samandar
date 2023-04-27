import App from "./component/App";
import {Root, createRoot} from "react-dom/client";
import "./style/index.css";

const root: Root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
    <>
        <App/>
    </>
);
