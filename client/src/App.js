import { Navbar } from './components';
<<<<<<< HEAD
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './Home';
import Login from './Register';
import { Provider } from 'react-redux';
import store from './redux/store';

const HomeRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/men',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/women',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/jewelry',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/electronics',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
=======
import { Routes, Route, BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './Home';
const HomeRoutes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/men', element: <Home /> },
    { path: '/women', element: <Home /> },
    { path: '/jewelry', element: <Home /> },
    { path: '/electronics', element: <Home /> },
>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f
  ]);

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Provider store={store}>
        <BrowserRouter>
          <HomeRoutes />
        </BrowserRouter>
      </Provider>
=======
      <BrowserRouter>
        <Navbar />
        <HomeRoutes />
      </BrowserRouter>
>>>>>>> 5f55c9b861e717032550051fef3882a7687b142f
    </div>
  );
}

export default App;
