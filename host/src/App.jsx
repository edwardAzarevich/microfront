import { useState } from 'react'
import './App.css'
import Button from "remoteApp/Button";
import useStore from "remoteApp/store";


function App() {
    const [count, setCount] = useStore()

    return (
        <>
            <div>
                <h1>Host Application</h1>
                <Button />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
