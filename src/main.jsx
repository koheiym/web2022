import { createRoot } from "react-dom/client";
import App from "./App" assert{type:json};
import "bulma/css/bulma.css";

createRoot(document.querySelector("#content")).render(<App />);