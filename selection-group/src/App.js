import './App.css';
import CheckboxGroup from './checkbox-group';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <h2>Wo haben sie Vermögen?</h2>
        <CheckboxGroup options={["Girokonto", "Tagesgeld", "Aktien", "ETF"]} />
      </div>   
    </div>
  );
}

export default App;
