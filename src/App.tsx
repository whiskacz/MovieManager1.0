import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Manager from './pages/Manager';

export const App: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Manager />} />
        </Routes>
    </Router>
  )
}

export default App;