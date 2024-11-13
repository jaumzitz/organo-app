import './Coworker.css'

const Coworker = ({name, occupation, image, backgroundColor}) => {
    return (
        <div className="coworker">
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt="Perfil de Joao Fiorini"/>
            </div>

            <div className="footer">
                <h4>{name}</h4>
                <h5>{occupation}</h5>
            </div>
        </div>
    )
}

export default Coworker