import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/create" element={<CreatePost />} />
				<Route path="*" element={<h2>Page not Found</h2>} />
			</Routes>
			<Layout />
    </Router>
  );
};

export default App;