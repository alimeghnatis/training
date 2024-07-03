import Header from './component/Header/Header.js'
import './App.scss';
import Main from './component/Main/Main.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hh</p>
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
