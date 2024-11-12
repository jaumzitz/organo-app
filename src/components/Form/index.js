import './Form.css'
import TextField from '../TextField'

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"></TextField>
                <TextField label="Cargo" placeholder="Cargo do colaborador"></TextField>
                <TextField label="Imagem" placeholder="URL / Caminho da imagem"></TextField>
            </form>
        </section>
    )
}

export default Form;