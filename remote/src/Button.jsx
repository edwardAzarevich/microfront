
import "./Button.css"
import { useState } from "react"
import useCount from "./store"


export const Button = () => {
    const [state, setState] = useCount()
    return (
        <div>
            <button id='click-btn' className='shared-btn' onClick={() => setState((s) => s + 1)}>Click me: {state}</button>
        </div>
    )
}

export default Button