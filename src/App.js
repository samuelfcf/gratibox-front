import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Pages from './Pages';
import GlobalStyle from './styles/GlobalStyle';
import UserContext from './contexts/UserContext';

const App = () => {
  const userStorage = JSON.parse(localStorage.getItem('@user'));
  const [user, setUser] = useState(userStorage);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Pages />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
