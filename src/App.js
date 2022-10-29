import './App.css';
import FetchProducts from './components/FetchProducts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <div style={{ padding: "2rem" }}>
          <FetchProducts />
        </div>
      </header>
    </div>
  );
}

export default App;
