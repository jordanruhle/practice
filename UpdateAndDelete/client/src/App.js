import './App.css';
import Dashboard from './views/Dashboard';
import {Routes, Route} from 'react-router-dom'
import OnePirate from './views/onepirate';
import Update from './views/Update';
import PirateForm from './views/form';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Dashboard/>} path="/pirates" />
        <Route element={<PirateForm/>} path="/pirate/new" />
        <Route element={<OnePirate/>} path="/pirates/:id" />
        <Route element={<Update/>} path="/:id/edit" />
      </Routes>
    </>
    
  );
}

export default App;
