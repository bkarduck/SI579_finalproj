import './App.css';
import CalendarComponent from './components/CalendarComponent'
import HabitTracker from './components/HabitTracker';
import QuoteBoard from './components/QuoteBoard';
import TodoList from './components/TodoList';
function App() {
  return (
    <div class="App">
      
      <header class="header">
        <h1>Personal Planner</h1>
      </header>
      <div class='grid-container'>
        <div class='calendar-section'><CalendarComponent /></div>
        <div class='todo-section'><TodoList /></div>
        <div class='habit-section'><HabitTracker /></div>
        <div class='quote-section'><QuoteBoard /></div>
      </div>
    </div>

  )
}

export default App;