import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Pages />
    </Router>
    );
}

export default App;
