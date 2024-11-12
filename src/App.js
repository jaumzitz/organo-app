//Ao utilizar o nome index.js no componente, não é necessário declarar no import o 'Banner/Banner'
import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';


function App() {

  const [coworkers, setCoworkers] = useState([])

  const registerCoworker = (coworker) => {
    console.log(coworker)
    setCoworkers([...coworkers, coworker])

  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form register={data => registerCoworker(data)}></Form>
      
    </div>
  );
}

export default App;
