
import './App.css';
import CustomizedPassword from './components/CustomizedPassword';
import RandomPassword from './components/RandomPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomPassword />
        <br></br>
        <CustomizedPassword></CustomizedPassword>
      </header>
    </div>
  );
}

export default App;
