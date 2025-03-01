
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './component/Movies';
import UseState from './component/UseState';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Toggled from './component/Toggled';
import Counter from './component/Counter';
import Test3 from './component/Test3';
import UseEffect from './component/UseEffect';
import UseEffect3 from './component/UseEffect3';
import UseEffect4 from './component/UseEffect4';
import Test from './component/Test';
import MultipleDepen from './component/MultipleDepen';
import Home from './usenevigate/Home';
import Routing from './usenevigate/Routing';
import Toggle from './usenevigate/Toggle';
import User from './useparams/User';
import Mapping from './mapping/Mapping';
import Mappings from './mapping/Mappings';
import PageNotFound from './mapping/PageNotFound';
import TestMapp from './mapping/TestMapp';
import TestMapping from './mapping/TestMapping';
import AllProduct from './project/AllProduct';
import WishList from './project/WishList';
import FunctionProp from './leture28/FunctionProp';
import FunctionalCounter from './leture28/FunctionalCounter';
import StyledComponents from './stylecomponents/StyledComponents';
import InlineStyling from './stylecomponents/InlineStyling';


function App() {
  return (
    <Routes>
      <Route path="/" element = { <Home />}/>
      <Route path="*" element = { <PageNotFound />}/>
      <Route path="/movies" element = { <Movies />}/>
      <Route path="/use-state" element = { <UseState />}/>
      <Route path="/test1" element = { <Test1 />}/>
      <Route path="/test2" element = { <Test2 />}/>
      <Route path="/toggled" element = { <Toggled />}/>
      <Route path="/counter" element = { <Counter />}/>
      <Route path="/test3" element = { <Test3 />}/>
      <Route path="/use-effect" element = { <UseEffect />}/>
      <Route path="/use-effect-3" element = { <UseEffect3 />}/>
      <Route path="/use-effect-4" element = { <UseEffect4 />}/>
      <Route path="/test" element = { <Test />}/>
      <Route path="/multiple-dependency" element = { <MultipleDepen />}/>
      <Route path="/use-navigate" element = { <Routing />}/>
      <Route path="/toggle" element = { <Toggle />}/>
      <Route path="/user/:userdetails" element = { <User /> } />
      <Route path="/mapping" element = { <Mapping students={["Thor", "Thorfinn", "Thorgill"]} />}/>
      <Route path='/mappings' element = { <Mappings teama = {["Hisako", "Yukihira", "Erina"]} />} />
      <Route path='/test-mapp' element = { <TestMapp numbers = {["One", "Two", "three"]} />} />
      <Route path='/test-mapping' element = { <TestMapping testing = {["Finn", "Ginn"]} />} />
      <Route path="/all-product" element = { <AllProduct />}/>
      <Route path="/wish-list" element = { <WishList />}/>
      <Route path="/function-prop" element = { <FunctionProp />}/>
      <Route path="/functional-counter" element = { <FunctionalCounter />}/>
      <Route path="/styled-components" element = { <StyledComponents />}/>
      <Route path="/inline-style" element = { <InlineStyling/>}/>

    </Routes>
  );
}

export default App;
