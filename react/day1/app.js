import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import User from "./components/User";
import Theme from "./components/Toggle";
const App = () => {
    return (
        <div >
           <Theme/>
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);