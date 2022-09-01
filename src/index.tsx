import * as ReactDOM from "react-dom/client";
import * as React from "react";
import Button from "@mui/material/Button";
import { Porky } from "./Paul";


const App = () => <><Porky /><Button variant="contained">Hello World</Button></>

ReactDOM.createRoot(document.querySelector("#app") as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
