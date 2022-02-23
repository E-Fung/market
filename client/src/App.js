import { Navbar } from './components';
import { Routes, Route, BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './Home';
const HomeRoutes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/men', element: <Home /> },
    { path: '/women', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/electronics', element: <Home /> },
  ]);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HomeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
