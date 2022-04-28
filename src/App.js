import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './pages/MainContent/MainContent';
import SpecificUser from './pages/SpecificUser/SpecificUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/users/:id" element={<SpecificUser />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
