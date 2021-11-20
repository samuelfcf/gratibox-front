import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Pages from './Pages';
import GlobalStyle from './styles/GlobalStyle';
import UserContext from './contexts/UserContext';
import SubscribeContext from './contexts/SubscribeContext';

const App = () => {
  const userStorage = JSON.parse(localStorage.getItem('@user'));
  const [user, setUser] = useState(userStorage);
  const [subscribe, setSubscribe] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SubscribeContext.Provider value={{ subscribe, setSubscribe }}>
        <Router>
          <GlobalStyle />
          <Pages />
        </Router>
      </SubscribeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
