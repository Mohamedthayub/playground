import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import User from "./components/User";

const App = () => {
    return (
        <div>
           <User/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);