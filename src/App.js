import logo from './logo.svg';
import './App.css';
import {Button} from 'apptestbase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button children={"Hello Guest!"}/>
         </header>
    </div>
  );
}

export default App;
