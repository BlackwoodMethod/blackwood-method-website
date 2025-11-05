import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Services from './pages/Services';
import Store from './pages/Store';
import Demo from './pages/Demo';
import Contact from './pages/Contact';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/store" component={Store} />
      <Route path="/demo" component={Demo} />
      <Route path="/contact" component={Contact} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600 mb-6">Page not found</p>
            <a href="/" className="text-primary hover:underline">
              Go back home
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
