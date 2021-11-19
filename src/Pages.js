import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Plans from './pages/Plans/Plans';
import Subscribe from './pages/Subscribe/Subscribe';
import Subscription from './pages/Subscription/Subscription';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
};

export default Pages;
