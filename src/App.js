// import logo from './logo.svg';
import './App.css';
// Route 
import { Routes ,Route } from 'react-router-dom';
// Home Component
import HomeComponent from './components/Card'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path="/" element={<HomeComponent />}></Route>
        </Routes>
    </div>
  );
}

export default App;
