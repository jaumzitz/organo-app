//Ao utilizar o nome index.js no componente, não é necessário declarar no import o 'Banner/Banner'
import Banner from './components/Banner';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Form></Form>
      
    </div>
  );
}

export default App;
