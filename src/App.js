import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Garage from './Garage';
import HelloBtn from './HelloBtn';
import HelloBtn2 from './HelloBtn2';
import AddCount from './AddCount';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello title="oss"/>
        <Garage/>
        <HelloBtn/>
        <HelloBtn2/>
        <AddCount/>
        <Color/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
