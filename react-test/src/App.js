
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './component/Movies';
import UseState from './component/UseState';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Toggled from './component/Toggled';
import Counter from './component/Counter';
import Test3 from './component/Test3';


function App() {
  return (
    <Routes>
      <Route path="/movies" element = { <Movies />}/>
      <Route path="/use-state" element = { <UseState />}/>
      <Route path="/test1" element = { <Test1 />}/>
      <Route path="/test2" element = { <Test2 />}/>
      <Route path="/toggled" element = { <Toggled />}/>
      <Route path="/counter" element = { <Counter />}/>
      <Route path="/test3" element = { <Test3 />}/>
    </Routes>
  );
}

export default App;
