import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PredictorPage from './screen/PredictorPage';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='/predictor' element={<PredictorPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
