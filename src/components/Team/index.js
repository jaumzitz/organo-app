import Coworker from '../Coworker'
import './Team.css'

const Team = (props) => {

    const sectionCSS = { backgroundColor: props.secondaryColor}
    const h3CSS = {borderColor: props.primaryColor}
    
    return (
        
        //Renderização condicional. Se condição 1 for true, então, renderiza o certo
        //Poderia usar operador ternário, ou dá forma abaixo com &&

        (props.coworkers.length > 0) && <section className='team' style={sectionCSS}>
            <h3 style={h3CSS}>{props.name}</h3>
            <div className='coworkers'>

            {props.coworkers.map(coworker => <Coworker key={coworker.name}
                name={coworker.name} 
                occupation={coworker.occupation} 
                image={coworker.imageLink}
                backgroundColor={props.primaryColor}/>)}
            </div>
        </section>

        
    )
}

export default Team