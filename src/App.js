import HomePages from './pages/HomePages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import { BrowserRouter, Switch,  Route } from 'react-router-dom'
import './sass/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/"  component ={HomePages}></Route>
        <Route path="/catolog" exact comment={Catalog} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
