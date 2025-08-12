import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button';
import useCount from "./store";


function App() {
    const [count, setCount] = useCount();

    return (
        <>
            <div>
                <h1>Remote Application</h1>
                <Button />
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
