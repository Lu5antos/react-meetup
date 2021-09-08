import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';



function App() {
  return <div>
    <Route path='/'>
      <AllMeetupsPage/>
    </Route>
    <Route path='/new-meetup'>
      <AllMeetupsPage/>
    </Route>
    <Route path='/favorites'>
      <AllMeetupsPage/>
    </Route>
  </div>;
}

export default App;
