import {useState} from "react";
const Counter = () => {
    const [count,setCount] = useState(0);
    
    return (
        <div className="main">
            <div>
                <h1>{count}</h1>
            <div className="btn-container">
                <button onClick={() => setCount(count + 1)}>increate</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count - 1)}>decreate</button>
            </div>
            </div>
        </div>
    )
    
}
export default Counter;