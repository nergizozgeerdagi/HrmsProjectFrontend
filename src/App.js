import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;