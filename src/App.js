import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AddPage from './pages/Add';
import HomePage from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/add'>
          <AddPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
