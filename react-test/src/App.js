
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './component/Movies';


function App() {
  return (
    <Routes>
      <Route path="/movies" element = { <Movies />}/>
    </Routes>
  );
}

export default App;
