import './App.css';
import CalendarComponent from './components/CalendarComponent'

function App() {
  return (
    <div className="App">
     <header>
     {/* from: https://www.sliderrevolution.com/resources/css-header/ */}
     <div class="overlay">
     <h1>The best planner ever</h1>
     <h3>showing the other font!</h3>
      </div>
     </header>
    
        <CalendarComponent />
    </div>

  )}

  export default App;