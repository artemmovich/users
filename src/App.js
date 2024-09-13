import './App.css';
import { Header } from './components/Header';
import { EditUsers } from './pages/EditUsers';
import { Users } from './pages/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
