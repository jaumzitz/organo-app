import './Form.css'
import TextField from '../TextField'
import DropdownField from '../DropdownField';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    //Métodos 'use' são hooks do React
    //Quando uma variável muda no JS, o react não sabe dessa mudança e não renderiza o novo valor em tela
    //Quando usamos useState/setState, o react sabe dessa mudança, logo, estamos 'pedindo' para o react renderizar o novo valor

    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [team, setTeam] = useState('Programação')

    const onSave = (event) => {
        event.preventDefault()
        props.register({
            name,
            occupation,
            imageLink,
            team
        })

        setName('')
        setOccupation('')
        setTeam('') //Pode bugar, pois o valor inicial exibido no form é Programação, mas não há valor real.
        setImageLink('')

        console.log('Form was submitted =>', name, occupation, imageLink, team)
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>

                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    setState={value => setName(value)}
                />

                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Cargo do colaborador"
                    value={occupation}
                    setState={value => setOccupation(value)}
                />

                <TextField
                    label="Imagem"
                    placeholder="URL / Caminho da imagem"
                    value={imageLink}
                    setState={value => setImageLink(value)}
                />

                <DropdownField
                    label="Time"
                    itens={props.teamsNames}
                    value={team}
                    setState={value => setTeam(value)} />

                <Button>Criar card</Button>

            </form>
        </section>
    )
}

export default Form;