
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SingleUser from './SingleUser/SingleUser';
import AllUsers from './Users/AllUsers';
;
function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<AllUsers/>}/>
        <Route path="user/:userId" element={<SingleUser/>}/>
      </Routes>
      </Router>
      
    
  );
}

export default App;