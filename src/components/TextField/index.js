import './TextField.css'

const TextField = (props) => {
    
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField