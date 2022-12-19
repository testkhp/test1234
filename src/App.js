import { Link, Router, Routes } from 'react-router-dom';
import './App.css';
import Test from './Test';

function App() {
  return (
    <div className="App">
        <Link to="/sub">서브로이동</Link>
        <img src='/img/fp1.jpg' alt="테스트" />
        <Routes>
          <Router path="/sub" element={<Test></Test>}></Router>
        </Routes>
    </div>
  );
}

export default App;
