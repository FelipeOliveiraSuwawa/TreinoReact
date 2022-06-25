
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <Form user={{name:'casper', email:'casper@gmail.com',bio:'kora',role:'user'}}/>
    </div>
  );
}

export default App;
