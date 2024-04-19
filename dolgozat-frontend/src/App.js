import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import CategoryChooser from './components/CategoryChooser';

function App() {
  return (
    <div className="App">
      <header>
        Tesztkérdések
      </header>
      <main>
        <CategoryChooser />
      </main>
    </div>
  );
}

export default App;
