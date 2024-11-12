import './DropdownField.css'

const DropdownField = (props) => {

    return (
        <div>
            <label>{props.label}</label>
            <select className="dropdown-field" value={props.value} onChange={event => props.setState(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownField