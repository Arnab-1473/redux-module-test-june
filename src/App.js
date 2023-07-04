
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>React - Redux Module Test</h1>
      </nav>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path="/item/:id" element= {< DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
