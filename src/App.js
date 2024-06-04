import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Scrollable from './components/Scrollable.jsx';
import Footer from './components/Footer';
import Menu from './components/Menu';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5173';
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className='App'>
      <Menu />
      <Scrollable />
      <Footer />
    </div>
  )
}

export default App;