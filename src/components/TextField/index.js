import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
    
    const onTyped = (event) => {
        props.setState(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyped} required={props.required}ype="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField