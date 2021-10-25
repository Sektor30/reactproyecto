
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from './components/Box';
import Clock from './components/Clock';
import Comment from './components/Comment';
import Delete from './components/Delete';
import Navegacion from './components/Navegacion';

function App() {
  return (

   
     <Router>
        <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white"> Galeria</h1>
        </div>

       <Route path="/Box" component={Box} />
       <Route path="/Clock" component={Clock} />
       <Route path="/Comment" component={Comment} />
       <Route path="/Delete" component={Delete} />

        <Navegacion />
     
     </Router> 

    

  );
}

export default App;
