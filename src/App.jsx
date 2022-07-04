import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import "./App.css";
import NavbarApp from './components/NavbarApp';
import GifSearch from './components/GifSearch';
function App() {
  return (
    <BrowserRouter>
    <NavbarApp/>
    <GifSearch/>
    <RoutesApp/>
    </BrowserRouter>
  )
}

export default App;
