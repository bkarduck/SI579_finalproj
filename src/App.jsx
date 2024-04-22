import './App.css';
import CalendarComponent from './components/CalendarComponent'
import HabitTracker from './components/HabitTracker';
import QuoteBoard from './components/QuoteBoard';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      
      <header className="header">
        <h1>Personal Planner</h1>
      </header>
      <div className='grid-container'>
        <div className='calendar-section'><CalendarComponent /></div>
        <div className='todo-section'><TodoList /></div>
        <div className='habit-section'><HabitTracker /></div>
        <div className='quote-section'><QuoteBoard /></div>
      </div>
    </div>

  )
}

export default App;