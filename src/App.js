import {useId} from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllUsers from './Users/AllUsers';
;

function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="user/:userId" element={<AllUsers/>}/>
      <Route path="/" element={<AllUsers/>}/>
      </Routes>
      </Router>
      
    
  );
}

export default App;