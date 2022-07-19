import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import BasicExample from './components/Form';




function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className="BasicSidebar">
          <Sidebar />
          <BasicExample />
        </div>





      </div>
    </Router>
  );
}

export default App;