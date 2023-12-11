import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Manager from './pages/Manager';
import MovieDetails from './components/MovieDetails';
import {  useSelector } from 'react-redux';
import { StateMovieSection } from './interfaces/interface';



export const App: React.FC = () => {
  const loggedUser = useSelector((state: StateMovieSection) => state.loggedUser.loggedUser)


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            {loggedUser ? (
          <Route path='/manager' element={<Manager />} />
        ) : (
          // Przekierowanie do strony Home, jeśli użytkownik nie jest zalogowany
          <Route path='/*' element={<Home />} />
        )}
            <Route path='/manager/:id' element={<MovieDetails />} />
        </Routes>
    </Router>
  )
}

export default App;