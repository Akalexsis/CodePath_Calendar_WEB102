// imported CSS file for styling
import './App.css';
import Calendar from './components/Calendar';

// This is our root (parent to all components)
const App = () => {

  return (
    <div className="App">
      <h1>A week in Paradise 🌴</h1>
      <h2>Come enjoy a week long vacation stay in Costa Rica!</h2>
      <Calendar />
    </div>
  )
}

// exports App component to be used in other files
export default App