import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <form>
        <h2>TODO</h2>
        <label>What needs to be done?</label>
        <br />
        <input />
        <button>Add #!</button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
       </form>
      </header>
    </div>
  );
}

export default App;
