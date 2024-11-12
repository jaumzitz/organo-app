//Ao utilizar o nome index.js no componente, não é necessário declarar no import o 'Banner/Banner'
import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },

  ]

  const [coworkers, setCoworkers] = useState([])

  const registerCoworker = (coworker) => {
    console.log(coworker)
    setCoworkers([...coworkers, coworker])

  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form teamsNames={teams.map(team => team.name)} register={data => registerCoworker(data)}></Form>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        coworkers={coworkers.filter(coworker => coworker.team == team.name)}
      />)}

    <Footer/>
    </div>
  );
}

export default App;
