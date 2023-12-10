import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Manager from './pages/Manager';
import MovieDetails from './components/MovieDetails';
import { Provider } from 'react-redux';
import store from './store/store';


export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/manager' element={<Manager />} />
              <Route path='/manager/:id' element={<MovieDetails />} />
          </Routes>
      </Router>
    </Provider>
  )
}

export default App;