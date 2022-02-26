import { Navbar } from './components';
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
  ]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <HomeRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
