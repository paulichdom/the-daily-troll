import { RouterProvider } from './router/RouterContext';
import { Route, Router } from './router/Router';
import { HomePage } from './pages/HomePage';
import { ReactHomePage } from './pages/ReactHomePage';

function App() {
  return (
    <RouterProvider>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/react" component={ReactHomePage} />
      </Router>
    </RouterProvider>
  );
}

export default App;
